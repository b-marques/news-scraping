# Generated by Django 2.2.10 on 2020-04-01 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_auto_20200319_1929'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='hero_image',
            field=models.ImageField(max_length=255, upload_to='media/hero_images/'),
        ),
    ]
