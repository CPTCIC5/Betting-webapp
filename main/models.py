from django.db import models
from users.models import User
import random

class Game(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

"""

class GameRound(models.Model):
    COLORS = [('Green', 'Green'), ('Red', 'Red'), ('Voilet-Green','Voilet-Green'), ('Voilet-Red', 'Voilet-Red')]

    NUMBERS = [('1','One'), ('2','Two'), ('3','Three'), ('4','Four'), ('5','Five'), ('6','Six'),
               ('7', 'Seven'), ('8','Eight'), ('9','Nine'), ('0','Ten')]


    game = models.ForeignKey(Game, on_delete=models.PROTECT)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    drawn_color = models.CharField(max_length=10, choices=COLORS)
    number_prediction = models.CharField(max_length=1, choices=COLORS)
    bet_value= models.DecimalField(default=10.00)
    is_correct_prediction = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        # Randomize the drawn color 
        self.drawn_color = random.choice([color[0] for color in self.COLORS])

        # Check if the prediction is correct
        self.correct_prediction = self.player_prediction == self.drawn_color
        super().save(*args, **kwargs)

    def __str__(self):
"""