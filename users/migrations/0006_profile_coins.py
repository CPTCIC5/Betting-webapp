# Generated by Django 4.2.5 on 2024-02-11 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_profile_total_referal'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='coins',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=7),
        ),
    ]
