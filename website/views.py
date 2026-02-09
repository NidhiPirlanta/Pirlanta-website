from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def home(request):
    data = {
        "brand": {
            "name": "Pirlanta",
            "tagline": "Secure & Scalable Solution Provider",
        },
        "nav": [
            {"label": "Home", "href": "#home"},
            {"label": "About Us", "href": "#about"},
            {"label": "Threat Map", "href": "#threat-map"},
            {"label": "Services", "href": "#services"},
            {"label": "Partners", "href": "#partners"},
            {"label": "Contact Us", "href": "#contact"},
        ],
        "hero": {
            "headline": "Expert-Led. AI-Powered.",
            "subhead": "Cybersecurity Services for the AI Era",
            "description": (
                "AI-driven threat detection, expert implementation, and measurable outcomes. "
                "Powered by Cisco, Fortinet, and industry-leading AI platforms."
            ),
            "badges": ["48+ Years Experience", "AI-Enhanced Operations"],
            "ctaPrimary": {"label": "Get Started", "href": "#contact"},
            "ctaSecondary": {"label": "Learn More", "href": "#services"},
            "stats": [
                {"label": "Threats Blocked", "value": "14,546"},
                {"label": "Systems", "value": "156+"},
                {"label": "Monitors", "value": "24/7"},
            ],
        },
        "services": [
            {
                "title": "Threat Detection & Response",
                "description": "AI-enhanced monitoring, triage, and rapid containment.",
            },
            {
                "title": "Security Architecture",
                "description": "Zero-trust design and implementation for modern environments.",
            },
            {
                "title": "Managed Security",
                "description": "End-to-end management with real-time analytics and reporting.",
            },
        ],
        "partners": [
            "Cisco",
            "Fortinet",
            "Palo Alto Networks",
            "Microsoft",
        ],
        "contact": {
            "title": "Talk to a security expert",
            "subtitle": "Tell us about your environment and we'll recommend a plan.",
        },
    }
    return Response(data)


@api_view(["GET"])
def threatmap(request):
    data = {
        "status": "ok",
        "attacks": [
            {
                "id": "atk-001",
                "source_country": "United States",
                "target_country": "India",
                "source_ip": "203.0.113.42",
                "target_ip": "198.51.100.24",
                "attack_type": "Malware",
                "severity": "high",
                "timestamp": "2026-02-08T08:59:14Z",
            },
            {
                "id": "atk-002",
                "source_country": "Germany",
                "target_country": "United Kingdom",
                "source_ip": "198.51.100.71",
                "target_ip": "203.0.113.19",
                "attack_type": "Phishing",
                "severity": "medium",
                "timestamp": "2026-02-08T08:59:40Z",
            },
        ],
        "stats": {
            "threats_blocked": 15997,
            "systems": 156,
            "monitors": "24/7",
        },
    }
    return Response(data)
