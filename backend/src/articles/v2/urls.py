from django.urls import re_path
from articles.v2 import views


urlpatterns = [
    re_path(r"", views.ArticleList.as_view(), name=views.ArticleList.name),
]
