from django.contrib import admin
from .models import Subject


class SubjectAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "color"]


admin.site.register(Subject, SubjectAdmin)
