from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Player,Game

@receiver(post_save, sender=Player)
def create_game_after_3_minutes(sender, instance, created, **kwargs):
    print('ahh')
    if created:
        if instance.game.time_difference >= 180:  # 180 seconds = 3 minutes
            # Create a new Game object here if condition is met
            new_game = Game.objects.create(name=instance.game.name)
            #print('working h ',new_game)
            # You may set other fields of the new_game object here as needed
            new_game.save()
