"""
Assessment report generation: scoring logic and PDF creation.
"""
import io
import tempfile
from datetime import datetime
from pathlib import Path

from django.conf import settings
from django.template.loader import render_to_string

INDUSTRY_AVERAGE = 55


def _get_step_data(form_data, step):
    key = f"step_{step}"
    return form_data.get(key) or {}


def _score_radio(value, mapping):
    return mapping.get(value, 0)


def _score_checkbox(values, option_scores):
    if not values:
        return 0
    total = sum(option_scores.get(v, 0) for v in (values if isinstance(values, list) else [values]))
    max_possible = sum(option_scores.values())
    return min(100, int((total / max_possible * 100)) if max_possible else 0)


def compute_scores(session):
    form_data = session.form_data or {}
    s2 = _get_step_data(form_data, 2)
    s3 = _get_step_data(form_data, 3)
    s4 = _get_step_data(form_data, 4)

    customers_scores = []
    selling_scores = {"offline": 10, "mobile": 25, "website": 25, "ecommerce": 25, "social": 20, "whatsapp": 20}
    ch = s2.get("selling_channels") or []
    if ch:
        customers_scores.append(_score_checkbox(ch, selling_scores))
    prio = s2.get("digital_priorities") or []
    if isinstance(prio, list) and "channels" in prio:
        customers_scores.append(25)
    elif prio:
        customers_scores.append(10)
    ai_proc = s2.get("ai_ml_processes") or []
    if isinstance(ai_proc, list) and "customer" in ai_proc:
        customers_scores.append(30)
    digital_customers_score = int(sum(customers_scores) / len(customers_scores)) if customers_scores else 40

    workplace_scores = []
    comm = s4.get("communication_channels") or []
    comm_scores = {"intranet": 30, "email": 20, "whatsapp": 15, "mobile": 15}
    if comm:
        workplace_scores.append(_score_checkbox(comm, comm_scores))
    for key in ["google_workspace", "hrms", "microsoft_365"]:
        workplace_scores.append(_score_radio(s4.get(key), {"no_plans": 0, "planned": 25, "implementing": 60, "in_use": 100}))
    workplace_scores.append(_score_radio(s2.get("training_frequency"), {"never": 0, "rarely": 20, "sometimes": 50, "regularly": 100}))
    digital_workplace_score = int(sum(workplace_scores) / len(workplace_scores)) if workplace_scores else 45

    operations_scores = []
    conn = s3.get("internet_connectivity") or []
    conn_scores = {"ill": 35, "sdwan": 30, "wifi": 20, "broadband": 15, "none": 0}
    if conn:
        operations_scores.append(_score_checkbox(conn, conn_scores))
    for key in ["secure_email", "secure_browsing", "cloud_firewall", "onprem_firewall"]:
        operations_scores.append(_score_radio(s3.get(key), {"no_plans": 0, "planned": 25, "implementing": 60, "in_use": 100}))
    operations_scores.append(_score_radio(s3.get("iot_usage"), {"no": 0, "planning": 30, "limited": 60, "extensive": 100}))
    operations_scores.append(_score_radio(s2.get("it_network"), {"in_house": 40, "managed": 70, "hybrid": 80, "outsourced": 60}))
    operations_scores.append(_score_radio(s2.get("ai_ml_usage"), {"no_plans": 0, "planning": 30, "implementation": 70, "adopted": 100}))
    digital_operations_score = int(sum(operations_scores) / len(operations_scores)) if operations_scores else 50

    overall_score = int((digital_customers_score + digital_workplace_score + digital_operations_score) / 3)
    overall_score = min(100, max(0, overall_score))

    return {
        "overall_score": overall_score,
        "digital_customers_score": min(100, digital_customers_score),
        "digital_workplace_score": min(100, digital_workplace_score),
        "digital_operations_score": min(100, digital_operations_score),
        "industry_average": INDUSTRY_AVERAGE,
    }


def get_score_message(overall_score):
    if overall_score >= 80:
        return "Your business shows excellent digital maturity! You're well-positioned for future growth."
    if overall_score >= 60:
        return "Your business has made good progress on its digital journey. There are opportunities to strengthen further."
    if overall_score >= 40:
        return "Your business has begun its digital transformation. We can help you accelerate and fill the gaps."
    return "There's significant opportunity to digitally transform your business. Let's get started!"


def generate_survey_code(session):
    return f"PIR-{str(session.id).replace('-', '')[:8].upper()}"


def get_logo_path():
    base = Path(settings.BASE_DIR)
    logo = base / "website" / "static" / "pir-logo.png"
    if logo.exists():
        return f"file://{logo.resolve()}"
    return None


def build_report_context(session):
    scores = compute_scores(session)
    return {
        "assessment_data": {"user": {"full_name": session.name or "Valued Customer"}},
        "report_date": datetime.now().strftime("%d %B %Y"),
        "logo_path": get_logo_path(),
        "scores": scores,
        "score_message": get_score_message(scores["overall_score"]),
        "survey_code": generate_survey_code(session),
    }


def render_report_html(session):
    context = build_report_context(session)
    return render_to_string("website/assessment_report.html", context)


def generate_pdf(session):
    html_str = render_report_html(session)
    base_dir = Path(settings.BASE_DIR).resolve()

    try:
        from playwright.sync_api import sync_playwright
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            with tempfile.NamedTemporaryFile(mode="w", suffix=".html", delete=False, encoding="utf-8") as f:
                f.write(html_str)
                temp_path = Path(f.name)
            try:
                page.goto(f"file://{temp_path}")
                page.wait_for_load_state("networkidle")
                pdf_bytes = page.pdf(format="A4", margin={"top": "0", "right": "0", "bottom": "0", "left": "0"})
            finally:
                temp_path.unlink(missing_ok=True)
            browser.close()
        return pdf_bytes, None
    except ImportError:
        pass
    except Exception:
        pass

    try:
        from xhtml2pdf import pisa
        simple_html = render_to_string("website/assessment_report_simple.html", build_report_context(session))
        pdf_buffer = io.BytesIO()
        pisa_status = pisa.CreatePDF(simple_html, dest=pdf_buffer, encoding="utf-8", path=str(base_dir))
        if pisa_status.err:
            return None, "PDF generation failed"
        return pdf_buffer.getvalue(), None
    except ImportError:
        return None, "Install playwright: pip install playwright && playwright install chromium"
    except Exception as e:
        return None, str(e)


def send_report_email(session, pdf_bytes):
    from django.core.mail import EmailMessage

    if not pdf_bytes:
        return False, "No PDF generated"

    subject = f"Your Digital Assessment Report - {session.name}"
    body = (
        f"Dear {session.name},\n\n"
        "Thank you for completing the Pirlanta Digital Assessment.\n\n"
        "Please find your personalized Digital Assessment Report attached.\n\n"
        "Best regards,\n"
        "Pirlanta IT Solutions"
    )
    filename = f"Digital_Assessment_Report_{session.name.replace(' ', '_')}.pdf"

    try:
        email = EmailMessage(
            subject=subject,
            body=body,
            from_email=getattr(settings, "DEFAULT_FROM_EMAIL", "noreply@pirlanta.in"),
            to=[session.email],
        )
        email.attach(filename, pdf_bytes, "application/pdf")
        email.send(fail_silently=False)
        return True, None
    except Exception as e:
        return False, str(e)
