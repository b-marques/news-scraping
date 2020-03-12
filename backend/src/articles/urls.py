from django.urls import path
from articles import views

urlpatterns = [
    path("articles/", views.ArticleList.as_view(), name=views.ArticleList.name),
    path(
        "articles/<int:pk>/",
        views.ArticleDetail.as_view(),
        name=views.ArticleDetail.name,
    ),
    path("", views.ArticlesApiRoot.as_view(), name=views.ArticlesApiRoot.name,),
]
