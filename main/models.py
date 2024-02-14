from django.db import models
from users.models import Profile
import random
from  decimal import Decimal
from django.utils import timezone
class Game(models.Model):
    GAMES = (
        ("Sapre","Sapre"),
        ("Parity","Parity"),
        ("Bcone","Bcone")
    )

    COLORS = [('Green', 'Green'), ('Red', 'Red'), ('Voilet-Green','Voilet-Green'), ('Voilet-Red', 'Voilet-Red')]
    NUMBERS = [('1','One'), ('2','Two'), ('3','Three'), ('4','Four'), ('5','Five'), ('6','Six'),
               ('7', 'Seven'), ('8','Eight'), ('9','Nine'), ('0','Ten')]
    

    name = models.CharField(max_length=20,choices=GAMES)
    final_number= models.CharField(max_length=20,blank=True)
    final_color=models.CharField(max_length=20,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.pk:  # Only generate random values if the instance is being created
            self.final_number = random.choice([num[0] for num in self.NUMBERS])
            self.final_color = random.choice([color[0] for color in self.COLORS])
        super().save(*args, **kwargs)

    
    @property
    def time_difference(self):
        return (timezone.now() - self.created_at).total_seconds()


    def __str__(self):
        return f" {self.name} -  {str(self.id)}"
    


class Player(models.Model):
    game = models.ForeignKey(Game,on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    color_prediction = models.CharField(max_length=20, choices=Game.COLORS)
    number_prediction = models.CharField(max_length=100, choices=Game.NUMBERS)
    bet_value= models.DecimalField(max_digits=5,decimal_places=2)
    
    is_correct_prediction = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.number_prediction == self.game.final_number: 
            self.is_correct_prediction = True
            self.user.coins += Decimal(self.bet_value) * Decimal('8')  # Convert bet_value to Decimal
            self.user.save()

        elif self.color_prediction == self.game.final_color:
            self.is_correct_prediction = True
            self.user.coins += Decimal(self.bet_value) * Decimal('1.75')  # Convert bet_value to Decimal
            self.user.save()

        super().save(*args, **kwargs)
    """
    def save(self,*args,**kwargs):
        if self.number_prediction == self.game.final_number: # or self.color_prediction == self.game.final_color:
            self.is_correct_prediction = True
            
            self.user.coins += float(self.bet_value) * 8

        elif self.color_prediction == self.game.final_color:
            self.is_correct_prediction = True
            self.user.coins + float(self.bet_value) * 1.75

        super().save(*args, **kwargs)
        """

    def __str__(self):
        return f"{self.game} - {self.user}"
    