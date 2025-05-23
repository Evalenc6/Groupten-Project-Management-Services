# Generated by Django 5.2 on 2025-04-26 00:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_requirement_status_requirement_tag_risk_level_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='EffortLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hours', models.IntegerField()),
                ('date_logged', models.DateTimeField(auto_now_add=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.project')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.customuser')),
            ],
        ),
        migrations.DeleteModel(
            name='Effort',
        ),
    ]
