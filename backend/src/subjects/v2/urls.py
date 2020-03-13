from django.urls import re_path
from subjects.v2 import views


urlpatterns = [
    re_path(r"", views.SubjectList.as_view(), name=views.SubjectList.name),
]
