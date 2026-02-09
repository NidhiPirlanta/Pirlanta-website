import asyncio
import random
from collections import Counter, deque
from datetime import datetime, timezone
from typing import Deque, Dict, List

from fastapi import Depends, FastAPI, Header, HTTPException, Request, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

API_KEY = "pirlanta-dev-key"
MAX_PER_MINUTE = 120
ATTACK_BUFFER_SIZE = 200

COUNTRIES = [
    "USA",
    "India",
    "China",
    "Germany",
    "Brazil",
    "Japan",
    "UAE",
    "Singapore",
    "United Kingdom",
    "Australia",
]
ATTACK_TYPES = ["Malware", "Phishing", "Exploit", "Ransomware", "Botnet", "DDoS"]
SEVERITIES = ["Low", "Medium", "High", "Critical"]


class Threat(BaseModel):
    origin: str
    target: str
    type: str
    severity: str
    timestamp: str


class ThreatStore:
    def __init__(self) -> None:
        self.attacks: Deque[Threat] = deque(maxlen=ATTACK_BUFFER_SIZE)
        self.type_counts: Counter = Counter()
        self.country_counts: Counter = Counter()
        self.systems = 156
        self.monitors = "24/7"

    def add_attack(self, threat: Threat) -> None:
        self.attacks.appendleft(threat)
        self.type_counts[threat.type] += 1
        self.country_counts[threat.origin] += 1
        self.country_counts[threat.target] += 1

    def latest(self) -> Threat | None:
        return self.attacks[0] if self.attacks else None

    def stats(self) -> Dict[str, object]:
        return {
            **{attack_type.lower(): self.type_counts.get(attack_type, 0) for attack_type in ATTACK_TYPES},
            "systems": self.systems,
            "monitors": self.monitors,
        }

    def by_country(self) -> Dict[str, int]:
        return dict(self.country_counts)


class ConnectionManager:
    def __init__(self) -> None:
        self.active: List[WebSocket] = []

    async def connect(self, websocket: WebSocket) -> None:
        await websocket.accept()
        self.active.append(websocket)

    def disconnect(self, websocket: WebSocket) -> None:
        if websocket in self.active:
            self.active.remove(websocket)

    async def broadcast(self, event: str, payload: dict) -> None:
        for socket in list(self.active):
            try:
                await socket.send_json({"event": event, "data": payload})
            except Exception:
                self.disconnect(socket)


store = ThreatStore()
manager = ConnectionManager()
rate_limits: Dict[str, Dict[str, int]] = {}

app = FastAPI(title="Pirlanta Threat Service")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


async def verify_api_key(x_api_key: str | None = Header(default=None)) -> None:
    if not x_api_key or x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API key")


def enforce_rate_limit(request: Request) -> None:
    ip = request.client.host if request.client else "anonymous"
    now = int(datetime.now(timezone.utc).timestamp() // 60)
    record = rate_limits.get(ip)
    if not record or record["minute"] != now:
        rate_limits[ip] = {"minute": now, "count": 1}
        return
    record["count"] += 1
    if record["count"] > MAX_PER_MINUTE:
        raise HTTPException(status_code=429, detail="Rate limit exceeded")


def make_attack() -> Threat:
    origin = random.choice(COUNTRIES)
    target = random.choice([country for country in COUNTRIES if country != origin])
    return Threat(
        origin=origin,
        target=target,
        type=random.choice(ATTACK_TYPES),
        severity=random.choice(SEVERITIES),
        timestamp=datetime.now(timezone.utc).isoformat(),
    )


@app.on_event("startup")
async def start_generator() -> None:
    async def run() -> None:
        while True:
            await asyncio.sleep(random.uniform(2.0, 3.2))
            threat = make_attack()
            store.add_attack(threat)
            await manager.broadcast("threat:new", threat.model_dump())
            await manager.broadcast("stats:update", store.stats())
            await manager.broadcast("country:update", store.by_country())

    asyncio.create_task(run())


@app.get("/api/threats/live", dependencies=[Depends(verify_api_key)])
async def live_threat(request: Request) -> Threat:
    enforce_rate_limit(request)
    threat = store.latest() or make_attack()
    if not store.attacks:
        store.add_attack(threat)
    return threat


@app.get("/api/threats/stats", dependencies=[Depends(verify_api_key)])
async def threat_stats(request: Request) -> Dict[str, int]:
    enforce_rate_limit(request)
    return store.stats()


@app.get("/api/threats/by-country", dependencies=[Depends(verify_api_key)])
async def threat_by_country(request: Request) -> Dict[str, int]:
    enforce_rate_limit(request)
    return store.by_country()


@app.websocket("/ws/threats")
async def threats_socket(websocket: WebSocket) -> None:
    await manager.connect(websocket)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)

