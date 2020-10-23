# Generated by Django 3.1.2 on 2020-10-23 11:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Route',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('borough', models.CharField(max_length=50, unique=True)),
                ('miles', models.PositiveIntegerField()),
                ('difficulty', models.CharField(max_length=50)),
                ('image', models.CharField(max_length=200)),
                ('stops', models.CharField(default='SOME STRING', max_length=200)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_routes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
