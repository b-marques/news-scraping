from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
