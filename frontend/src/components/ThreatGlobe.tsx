import { useEffect, useMemo, useRef } from 'react'
import createGlobe from 'cobe'

import { attackTypeColors, countries, type Attack } from '../data/threatData'

type CountryStats = {
  count: number
  latestType: string
  latestTimestamp: string
}

type HoverInfo = {
  country: string
  region: string
  attackCount: number
  attackType: string
  timestamp: string
  x: number
  y: number
}

type ThreatGlobeProps = {
  attacks: Attack[]
  activeTypes: Record<string, boolean>
  countryStats: Record<string, CountryStats>
  onSelectAttack: (attack: Attack) => void
  onHover: (info: HoverInfo | null) => void
}

type GlobeMarker = { location: [number, number]; size: number; color?: [number, number, number] }

/** Project lat/lon to screen coords given globe phi/theta (matches cobe rotation) */
const projectToScreen = (
  lat: number,
  lon: number,
  phi: number,
  theta: number,
  width: number,
  height: number
): { x: number; y: number; visible: boolean } => {
  const latRad = (lat * Math.PI) / 180
  const lonRad = (lon * Math.PI) / 180
  const x = Math.cos(latRad) * Math.sin(lonRad)
  const y = Math.sin(latRad)
  const z = Math.cos(latRad) * Math.cos(lonRad)

  const cosPhi = Math.cos(phi)
  const sinPhi = Math.sin(phi)
  const x1 = x * cosPhi + z * sinPhi
  const z1 = -x * sinPhi + z * cosPhi

  const cosTheta = Math.cos(theta)
  const sinTheta = Math.sin(theta)
  const y2 = y * cosTheta - z1 * sinTheta
  const z2 = y * sinTheta + z1 * cosTheta

  if (z2 > 0.3) return { x: 0, y: 0, visible: false }

  const d = 2.5
  const scale = (d - z2) / d
  const ndcX = (x1 / scale) * 0.5 + 0.5
  const ndcY = (-y2 / scale) * 0.5 + 0.5

  return {
    x: ndcX * width,
    y: ndcY * height,
    visible: true,
  }
}

const hexToRgb = (hex: string): [number, number, number] => {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
  if (!m) return [0.85, 1, 0.32]
  return [
    parseInt(m[1], 16) / 255,
    parseInt(m[2], 16) / 255,
    parseInt(m[3], 16) / 255,
  ]
}

export default function ThreatGlobe({
  attacks,
  activeTypes,
  countryStats,
  onSelectAttack,
  onHover,
}: ThreatGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const phiRef = useRef(0)
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const statsRef = useRef(countryStats)
  const markersRef = useRef<{ country: (typeof countries)[number]; attack?: Attack }[]>([])
  const globeMarkersRef = useRef<GlobeMarker[]>([])
  const hoverRef = useRef(onHover)
  const selectRef = useRef(onSelectAttack)
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 })

  const activeAttacks = useMemo(
    () => attacks.filter((a) => activeTypes[a.attack_type]),
    [attacks, activeTypes]
  )

  useEffect(() => {
    statsRef.current = countryStats
  }, [countryStats])

  useEffect(() => {
    hoverRef.current = onHover
  }, [onHover])

  useEffect(() => {
    selectRef.current = onSelectAttack
  }, [onSelectAttack])

  const markers = useMemo(() => {
    const seen = new Set<string>()
    const result: GlobeMarker[] = []
    const countryToAttack = new Map<string, Attack>()

    activeAttacks.forEach((attack) => {
      for (const name of [attack.source_country, attack.target_country]) {
        if (seen.has(name)) continue
        seen.add(name)
        countryToAttack.set(name, attack)
      }
    })

    markersRef.current = []
    seen.forEach((name) => {
      const country = countries.find((c) => c.name === name)
      if (!country) return
      const attack = countryToAttack.get(name)
      const color = attack ? hexToRgb(attackTypeColors[attack.attack_type]) : undefined
      result.push({
        location: [country.lat, country.lon],
        size: 0.04,
        color,
      })
      markersRef.current.push({ country, attack })
    })

    return result
  }, [activeAttacks])

  useEffect(() => {
    globeMarkersRef.current = markers
  }, [markers])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const createInstance = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.round(rect.width * dpr)
      const height = Math.round(rect.height * dpr)
      if (width < 2 || height < 2) return false
      sizeRef.current = { width, height, dpr }
      canvas.width = width
      canvas.height = height

      const globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width,
        height,
        phi: 0,
        theta: 0,
        dark: 5,
        diffuse: 1.1,
        mapBrightness: 10,
        scale: 0.8,
        mapSamples: 24000,
        baseColor: [0.01, 0.03, 0.01],
        markerColor: [0.85, 1.0, 0.32],
        glowColor: [0.22, 0.65, 0.18],
        offset: [0, 1],
        markers: globeMarkersRef.current,
        onRender: (state) => {
          phiRef.current += 0.0105
          const pointer = pointerRef.current
          pointer.x += (pointer.targetX - pointer.x) * 0.08
          pointer.y += (pointer.targetY - pointer.y) * 0.08
          state.phi = phiRef.current + pointer.x
          state.theta = pointer.y
          state.mapBrightness = 10.8
          state.markers = globeMarkersRef.current
        },
      })

      globeRef.current?.destroy()
      globeRef.current = globe
      return true
    }

    let initRaf = 0
    const init = () => {
      if (!createInstance()) {
        initRaf = requestAnimationFrame(init)
      }
    }
    init()

    let resizeRaf = 0
    const handleResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        const rect = canvas.getBoundingClientRect()
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const width = Math.round(rect.width * dpr)
        const height = Math.round(rect.height * dpr)
        const current = sizeRef.current
        const sizeChanged =
          Math.abs(width - current.width) > 2 ||
          Math.abs(height - current.height) > 2 ||
          dpr !== current.dpr
        if (sizeChanged) {
          createInstance()
        }
      })
    }

    const HIT_RADIUS = 24

    type HitResult = {
      country: (typeof countries)[number]
      attack?: Attack
      dist: number
      x: number
      y: number
    }

    const findHoveredMarker = (clientX: number, clientY: number): HitResult | null => {
      const rect = canvas.getBoundingClientRect()
      const phi = phiRef.current + pointerRef.current.x
      const theta = pointerRef.current.y
      const width = rect.width
      const height = rect.height

      let closest: HitResult | null = null

      markersRef.current.forEach(({ country, attack }) => {
        const { x, y, visible } = projectToScreen(
          country.lat,
          country.lon,
          phi,
          theta,
          width,
          height
        )
        if (!visible) return
        const dx = clientX - rect.left - x
        const dy = clientY - rect.top - y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < HIT_RADIUS && (!closest || dist < closest.dist)) {
          closest = { country, attack, dist, x: rect.left + x, y: rect.top + y }
        }
      })

      return closest
    }

    const handleMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      pointerRef.current.targetX = x * 0.2
      pointerRef.current.targetY = -y * 0.15

      const hit = findHoveredMarker(event.clientX, event.clientY)
      if (!hit) {
        hoverRef.current(null)
        return
      }
      const stats = statsRef.current[hit.country.name]
      hoverRef.current({
        country: hit.country.name,
        region: hit.country.region,
        attackCount: stats?.count ?? 0,
        attackType: stats?.latestType ?? 'Malware',
        timestamp: stats?.latestTimestamp ?? '—',
        x: hit.x,
        y: hit.y,
      })
    }

    const handleClick = (event: MouseEvent) => {
      const hit = findHoveredMarker(event.clientX, event.clientY)
      if (!hit?.attack) return
      selectRef.current(hit.attack)
    }

    const handleLeave = () => {
      pointerRef.current.targetX = 0
      pointerRef.current.targetY = 0
      hoverRef.current(null)
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('click', handleClick)
    canvas.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (initRaf) cancelAnimationFrame(initRaf)
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('click', handleClick)
      canvas.removeEventListener('mouseleave', handleLeave)
      globeRef.current?.destroy()
    }
  }, [])

  return (
    <div className="globe-canvas-wrap">
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-pointer"
        style={{ background: 'transparent' }}
      />
    </div>
  )
}
