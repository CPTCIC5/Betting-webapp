from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager

# Create your models here.
class User(AbstractUser):
    phone_number=models.CharField(max_length=12,unique=True)
    is_phone_verified= models.BooleanField(default=False)
    otp = models.CharField(max_length=5,blank=True)

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = []
    objects = UserManager()

    def __str__(self):
        return f"Number {self.phone_number}"