from django.contrib import admin
from .models import Article


class ArticleAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "title",
        "subject_name",
        "publish_date",
        "author_name",
    ]

    def author_name(self, instance):
        return instance.author.name

    author_name.admin_order_field = "author"  # Allows column order sorting
    author_name.short_description = "Author Name"  # Renames column head

    def subject_name(self, instance):
        return instance.subject.name

    subject_name.admin_order_field = "subject"  # Allows column order sorting
    subject_name.short_description = "Subject"  # Renames column head


admin.site.register(Article, ArticleAdmin)
