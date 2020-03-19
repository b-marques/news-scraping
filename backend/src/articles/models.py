from django.db import models
from authors.models import Author
from subjects.models import Subject


class Article(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    subject = models.ForeignKey(Subject, on_delete=models.PROTECT)
    hero_image = models.ImageField(upload_to="src/media/hero_images/", max_length=255)
    publish_date = models.DateTimeField()
    text = models.TextField()

    # Truncate text to 200 characters
    def truncate_text(self):
        return self.text[:200] + "..."
