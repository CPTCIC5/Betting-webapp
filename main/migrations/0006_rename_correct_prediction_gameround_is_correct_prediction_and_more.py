# Generated by Django 4.2.5 on 2023-11-18 09:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_gameround_game_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gameround',
            old_name='correct_prediction',
            new_name='is_correct_prediction',
        ),
        migrations.RemoveField(
            model_name='game',
            name='description',
        ),
        migrations.RemoveField(
            model_name='gameround',
            name='score',
        ),
        migrations.AlterField(
            model_name='gameround',
            name='game',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.game'),
        ),
        migrations.AlterField(
            model_name='gameround',
            name='player_prediction',
            field=models.CharField(choices=[('P', 'Parity'), ('S', 'Sapre'), ('B', 'Bcone')], default=('S', 'Sapre'), max_length=1),
        ),
    ]
