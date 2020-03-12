from django.urls import path
from articles import views
from articles.v2 import views as views_v2


urlpatterns = [
    path("articles/", views.ArticleList.as_view(), name=views.ArticleList.name),
    path(
        "articles/<int:pk>/",
        views.ArticleDetail.as_view(),
        name=views.ArticleDetail.name,
    ),
    path("", views_v2.ArticleApiRoot.as_view(), name=views_v2.ArticleApiRoot.name,),
]
