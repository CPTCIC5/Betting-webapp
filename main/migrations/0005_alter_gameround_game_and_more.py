# Generated by Django 4.2.5 on 2023-11-09 08:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_gameround_player_prediction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gameround',
            name='game',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main.game'),
        ),
        migrations.AlterField(
            model_name='gameround',
            name='player_prediction',
            field=models.CharField(choices=[('P', 'Parity'), ('S', 'Sapre'), ('B', 'Bcone')], default=('P', 'Parity'), max_length=1),
        ),
    ]
