from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=255)
    picture = models.ImageField(upload_to="src/media/author/")
