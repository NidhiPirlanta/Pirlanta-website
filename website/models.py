from django.db import models
import uuid
import random
import string
from datetime import timedelta
from django.utils import timezone


class AssessmentSession(models.Model):
    """Tracks a user's assessment session."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    terms_accepted = models.BooleanField(default=False)
    otp = models.CharField(max_length=6, blank=True)
    otp_expires_at = models.DateTimeField(null=True, blank=True)
    otp_verified = models.BooleanField(default=False)
    current_step = models.IntegerField(default=0)
    progress_percent = models.IntegerField(default=0)
    form_data = models.JSONField(default=dict, blank=True)  # All step responses
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def generate_otp(self):
        self.otp = ''.join(random.choices(string.digits, k=6))
        self.otp_expires_at = timezone.now() + timedelta(minutes=5)
        self.save(update_fields=['otp', 'otp_expires_at'])

    def verify_otp(self, code):
        if self.otp and self.otp_expires_at and timezone.now() < self.otp_expires_at:
            if str(code).strip() == str(self.otp):
                self.otp_verified = True
                self.save(update_fields=['otp_verified'])
                return True
        return False
