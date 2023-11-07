# Generated by Django 4.2.5 on 2023-11-05 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fake',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(default='xyz.png', upload_to='')),
                ('price', models.FloatField(default=0.0)),
                ('date_added', models.DateTimeField()),
            ],
            options={
                'ordering': ['-date_added'],
            },
        ),
    ]
