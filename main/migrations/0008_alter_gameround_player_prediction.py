# Generated by Django 4.2.5 on 2023-11-19 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_gameround_player_prediction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gameround',
            name='player_prediction',
            field=models.CharField(choices=[('P', 'Parity'), ('S', 'Sapre'), ('B', 'Bcone')], default=('P', 'Parity'), max_length=1),
        ),
    ]
