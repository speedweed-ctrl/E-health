# Generated by Django 4.1 on 2022-09-30 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('techsol', '0007_pharmacie_image_whearhouse_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='new',
            name='image',
            field=models.ImageField(default=78, upload_to=''),
            preserve_default=False,
        ),
    ]
