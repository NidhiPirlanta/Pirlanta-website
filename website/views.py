import logging

from django.conf import settings
from django.shortcuts import redirect, render
from django.core.mail import EmailMessage
from rest_framework import status

logger = logging.getLogger(__name__)
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
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
    # Sample events for the threatmap UI (lat/lng are required for rendering).
    events = [
        {
            "id": "evt-001",
            "city": "New York",
            "country": "United States",
            "lat": 40.7128,
            "lng": -74.0060,
            "attack": "Malware beacon",
            "attack_type": "Malware",
            "severity": "high",
            "timestamp": "2026-02-08T08:59:14Z",
            "source": "OTX",
        },
        {
            "id": "evt-002",
            "city": "Berlin",
            "country": "Germany",
            "lat": 52.5200,
            "lng": 13.4050,
            "attack": "Phishing campaign",
            "attack_type": "Phishing",
            "severity": "medium",
            "timestamp": "2026-02-08T08:59:40Z",
            "source": "AbuseIPDB",
        },
        {
            "id": "evt-003",
            "city": "Singapore",
            "country": "Singapore",
            "lat": 1.3521,
            "lng": 103.8198,
            "attack": "Brute force login",
            "attack_type": "Brute Force",
            "severity": "medium",
            "timestamp": "2026-02-08T09:01:10Z",
            "source": "ThreatFox",
        },
    ]
    data = {
        "status": "ok",
        "events": events,
        "render_events": events,
        "target": {
            "lat": getattr(settings, "THREATMAP_TARGET_LAT", 20.5937),
            "lng": getattr(settings, "THREATMAP_TARGET_LNG", 78.9629),
            "city": getattr(settings, "THREATMAP_TARGET_CITY", "New Delhi"),
            "country": getattr(settings, "THREATMAP_TARGET_COUNTRY", "India"),
        },
        "stats": {
            "threats_blocked": 15997,
            "systems": 156,
            "monitors": "24/7",
        },
        # Keep previous payload for compatibility.
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
    }
    return Response(data)


def threatmap_page(request):
    # Home URL: in dev (DEBUG) use React dev server; in prod use current request host
    if getattr(settings, "DEBUG", False):
        home_url = "http://localhost:5173"
    else:
        home_url = request.build_absolute_uri("/").rstrip("/")
    context = {
        "target_lat": getattr(settings, "THREATMAP_TARGET_LAT", 20.5937),
        "target_lng": getattr(settings, "THREATMAP_TARGET_LNG", 78.9629),
        "target_city": getattr(settings, "THREATMAP_TARGET_CITY", "New Delhi"),
        "target_country": getattr(settings, "THREATMAP_TARGET_COUNTRY", "India"),
        "home_url": home_url,
    }
    return render(request, "website/threatmap.html", context)


def assessment_redirect(request):
    """Redirect to the configured assessment URL. Set ASSESSMENT_REDIRECT_URL in settings."""
    url = getattr(settings, "ASSESSMENT_REDIRECT_URL", None) or ""
    if url:
        return redirect(url)
    return redirect("/")


# --- Assessment API ---
from .models import AssessmentSession
from .assessment_data import ASSESSMENT_QUESTIONS, READY_FOR_NEXT_BENEFITS


@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def assessment_start(request):
    """Create session and send OTP."""
    name = str(request.data.get("name", "")).strip()
    phone = str(request.data.get("phone", "")).strip()
    email = str(request.data.get("email", "")).strip()
    terms = bool(request.data.get("terms_accepted", False))
    if not name or not phone or not email:
        return Response({"error": "Name, phone, and email are required."}, status=status.HTTP_400_BAD_REQUEST)
    if not terms:
        return Response({"error": "You must agree to the terms and conditions."}, status=status.HTTP_400_BAD_REQUEST)
    session = AssessmentSession.objects.create(name=name, phone=phone, email=email, terms_accepted=terms)
    session.generate_otp()
    try:
        if getattr(settings, "EMAIL_HOST_USER", None) and getattr(settings, "EMAIL_HOST_PASSWORD", None):
            send_mail(
                f"Your Pirlanta Assessment OTP: {session.otp}",
                f"Your one-time password is: {session.otp}\n\nIt expires in 5 minutes.",
                getattr(settings, "DEFAULT_FROM_EMAIL", "noreply@pirlanta.in"),
                [email],
                fail_silently=True,
            )
    except Exception:
        pass
    payload = {
        "session_id": str(session.id),
        "otp_expires_in": 300,
        "message": "OTP sent to your email.",
    }
    if getattr(settings, "DEBUG", False):
        payload["otp"] = session.otp
    return Response(payload)


@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def assessment_verify_otp(request):
    """Verify OTP and advance to step 1."""
    session_id = request.data.get("session_id")
    otp = request.data.get("otp", "")
    if not session_id:
        return Response({"error": "Session ID required."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        session = AssessmentSession.objects.get(id=session_id)
    except AssessmentSession.DoesNotExist:
        return Response({"error": "Invalid session."}, status=status.HTTP_404_NOT_FOUND)
    if session.verify_otp(otp):
        session.current_step = 1
        session.progress_percent = 0
        session.save(update_fields=["current_step", "progress_percent"])
        return Response({"status": "ok", "session_id": str(session.id), "current_step": 1})
    return Response({"error": "Invalid or expired OTP."}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@authentication_classes([])
@permission_classes([AllowAny])
def assessment_questions(request, step):
    """Get questions for a step."""
    session_id = request.query_params.get("session_id")
    if not session_id:
        return Response({"error": "Session ID required."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        session = AssessmentSession.objects.get(id=session_id)
    except AssessmentSession.DoesNotExist:
        return Response({"error": "Invalid session."}, status=status.HTTP_404_NOT_FOUND)
    if not session.otp_verified:
        return Response({"error": "OTP not verified."}, status=status.HTTP_403_FORBIDDEN)
    step_data = ASSESSMENT_QUESTIONS.get(int(step))
    if not step_data:
        return Response({"error": "Invalid step."}, status=status.HTTP_404_NOT_FOUND)
    first_name = session.name.split()[0] if session.name else "there"
    data = {**step_data}
    if "title" in data and "{name}" in data["title"]:
        data["title"] = data["title"].format(name=first_name)
    data["benefits"] = READY_FOR_NEXT_BENEFITS
    return Response(data)


@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def assessment_submit_step(request):
    """Save step data and advance."""
    session_id = request.data.get("session_id")
    step = request.data.get("step")
    form_data = request.data.get("form_data", {})
    if not session_id or step is None:
        return Response({"error": "Session ID and step required."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        session = AssessmentSession.objects.get(id=session_id)
    except AssessmentSession.DoesNotExist:
        return Response({"error": "Invalid session."}, status=status.HTTP_404_NOT_FOUND)
    if not session.otp_verified:
        return Response({"error": "OTP not verified."}, status=status.HTTP_403_FORBIDDEN)
    data = dict(session.form_data or {})
    data[f"step_{step}"] = form_data
    session.form_data = data
    session.current_step = min(int(step) + 1, 5)
    session.progress_percent = int((session.current_step / 5) * 100)
    session.save(update_fields=["form_data", "current_step", "progress_percent"])

    # Generate and email PDF report when assessment is complete (step 4 submitted)
    if session.current_step > 4:
        try:
            from .assessment_report import generate_pdf, send_report_email
            pdf_bytes, err = generate_pdf(session)
            if err:
                logger.error("Assessment report PDF generation failed: %s", err)
            elif pdf_bytes:
                ok, email_err = send_report_email(session, pdf_bytes)
                if not ok:
                    logger.error("Assessment report email failed: %s", email_err)
                else:
                    logger.info("Assessment report sent to %s", session.email)
        except Exception as e:
            logger.exception("Assessment report generation/email failed: %s", e)

    return Response({
        "status": "ok",
        "current_step": session.current_step,
        "progress_percent": session.progress_percent,
    })


@api_view(["GET"])
@authentication_classes([])
@permission_classes([AllowAny])
def assessment_session(request):
    """Get current session state."""
    session_id = request.query_params.get("session_id")
    if not session_id:
        return Response({"error": "Session ID required."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        session = AssessmentSession.objects.get(id=session_id)
    except AssessmentSession.DoesNotExist:
        return Response({"error": "Invalid session."}, status=status.HTTP_404_NOT_FOUND)
    return Response({
        "session_id": str(session.id),
        "name": session.name,
        "phone": session.phone,
        "email": session.email,
        "otp_verified": session.otp_verified,
        "current_step": session.current_step,
        "progress_percent": session.progress_percent,
        "form_data": session.form_data or {},
    })


@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def contact(request):
    name = str(request.data.get("name", "")).strip()
    email = str(request.data.get("email", "")).strip()
    phone = str(request.data.get("phone", "")).strip()
    company = str(request.data.get("company", "")).strip()
    service = str(request.data.get("service", "")).strip()
    message = str(request.data.get("message", "")).strip()

    if not name or not email or not message:
        return Response(
            {"error": "Name, email, and message are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD:
        return Response(
            {"error": "Email service is not configured."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    subject = f"Contact form: {name}"
    body = (
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Phone: {phone}\n"
        f"Company: {company}\n"
        f"Service: {service}\n\n"
        f"Message:\n{message}\n"
    )

    try:
        msg = EmailMessage(
            subject,
            body,
            settings.DEFAULT_FROM_EMAIL,
            [settings.EMAIL_HOST_USER],
            reply_to=[email],
        )
        msg.send()
    except Exception as e:
        logger.exception("Contact form email failed: %s", e)
        return Response(
            {"error": "Failed to send message. Please try again."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    return Response({"status": "ok"}, status=status.HTTP_200_OK)
