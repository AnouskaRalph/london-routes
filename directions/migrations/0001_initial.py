# Generated by Django 3.1.2 on 2020-10-23 14:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('routes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Direction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stop_offs', models.CharField(max_length=50)),
                ('image', models.CharField(max_length=200)),
                ('route', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='directions', to='routes.route')),
            ],
        ),
    ]