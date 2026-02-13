from django.contrib import admin
from .models import AssessmentSession


@admin.register(AssessmentSession)
class AssessmentSessionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'otp_verified', 'current_step', 'progress_percent', 'created_at']
    list_filter = ['otp_verified', 'created_at']
    search_fields = ['name', 'email', 'phone']
    readonly_fields = ['id', 'created_at', 'updated_at']
