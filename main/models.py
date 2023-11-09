from django.db import models



# Create your models here.
class Game(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return self.name

"""
class Round():
    game=
    total_bidding=
    number=
    result=


class Order(models.Model):
    user=
    game=
    contact_money=
    contract_number=
"""