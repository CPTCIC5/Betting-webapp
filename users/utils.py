import pyotp
import base64
from django.conf import settings
import datetime
from django.utils import timezone
from .models import User

def generate_otp(secret: str):
    totp = pyotp.TOTP(
        secret, interval=settings.OTP_SETTINGS["OTP_VALIDITY_TIME"])
    return totp.now()


def verify_otp(secret: str, code: str):
    totp = pyotp.TOTP(
        secret, interval=settings.OTP_SETTINGS["OTP_VALIDITY_TIME"])
    return totp.verify(code)

def generate_secret(time: datetime, key: str, phone: str):
    timestamp = time.astimezone(timezone.get_current_timezone())
    data = f"{str(timestamp)}-{key}-{phone}"
    data = data.encode("utf-8")
    return base64.b32encode(data)

def check_verification_code(phone_number, code: str):
    phone = User.objects.get(username=phone_number)
    if phone.is_verified:
        date = phone.last_requested_at
    else:
        date = phone.created_at
    secret = generate_secret(date, settings.SECRET_KEY, phone.number)
    return verify_otp(secret, code)

def send_verification_code(phone_number: str):
    phone = User.objects.get(username=phone_number)
    if phone.is_phone_verified:
        date = phone.last_requested_at
    else:
        date = phone.created_at
    secret = generate_secret(date, settings.SECRET_KEY, phone.number)
    code = generate_otp(secret)
    validity = settings.OTP_SETTINGS["OTP_VALIDITY_TIME"] // 60
    message = f"""
    Your OTP for mobile verification is {code}.
    OTP is valid for {validity} minutes and should not be shared with anyone.
    """
    provider = settings.OTP_SETTINGS['PROVIDER']
    if provider == "exotel":
        send_sms_with_exotel(phone.number, message)
    elif provider == "twilio":
        send_sms_with_twilio(phone.number, message)