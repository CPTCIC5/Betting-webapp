from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager
from django.dispatch import receiver 
from django.db.models.signals import post_save


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
    
    
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username)
    

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()
    
    def save(self,*args, **kwargs):
        super(Profile, self).save(*args, **kwargs)


TYPES = (
    ("Suggestion", "Suggestion"),
    ("Consult", "Consult"),
    ("Withdraw Problem", "Withdraw Problem")
)

class Feedback(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=1)
    title=models.CharField(max_length=100,unique=False)
    suggestion=models.CharField(max_length=50,choices=TYPES)
    whatsapp_num=models.CharField(max_length=12)
    desc=models.TextField()
    is_resolved= models.BooleanField(default=False)
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['is_resolved','-posted_at']