from django.urls import path

from . import views

urlpatterns = [
    path("home/", views.home, name="home"),
    path("threatmap/", views.threatmap, name="threatmap"),
    path("contact/", views.contact, name="contact"),
    path("assessment/start/", views.assessment_start, name="assessment_start"),
    path("assessment/verify-otp/", views.assessment_verify_otp, name="assessment_verify_otp"),
    path("assessment/questions/<int:step>/", views.assessment_questions, name="assessment_questions"),
    path("assessment/submit/", views.assessment_submit_step, name="assessment_submit_step"),
    path("assessment/session/", views.assessment_session, name="assessment_session"),
]

