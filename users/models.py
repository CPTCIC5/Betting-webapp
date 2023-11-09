from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager

# Create your models here.
class User(AbstractUser):
    username = None
    phone_number=models.CharField(max_length=15,unique=True)
    is_phone_verified= models.BooleanField(default=False)

    USERNAME_FIELD = 'phone_number'
    objects = UserManager()
    
    
    def save(self, *args, **kwargs):
        if not self.id:
            # If the user is being created (not updating) and a password is provided, set the password
            if self.password and not self.has_usable_password():
                self.set_password(self.password)
        super().save(*args, **kwargs)


    def __str__(self):
        return f"Number {self.phone_number}"
    
