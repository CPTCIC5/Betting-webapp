from django.db import models

# Create your models here.
class Product(models.Model):
    title=models.CharField(max_length=100,unique=True,blank=False)
    image=models.ImageField(upload_to='Product-Images',default='xyz.png',blank=True,null=False)
    price=models.FloatField(default=0.00)
    quantity=models.IntegerField(default=3)
    date_added= models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    @property
    def stock_empty(self):
        if self.quantity <=0:
            return True
        else:
            return False


    class Meta:
        verbose_name_plural='Product'
        ordering= ['-id']

