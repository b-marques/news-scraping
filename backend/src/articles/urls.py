from django.urls import path, re_path

from articles import views

urlpatterns = [
    path("articles/", views.ArticleList.as_view(), name=views.ArticleList.name),
    re_path(
        r"^articles/(?P<pk>\d+)/$",
        views.ArticleDetail.as_view(),
        name=views.ArticleDetail.name,
    ),
    re_path(
        r"^articles/(?P<subject>[\w-]+)/$",
        views.BySubjectArticleList.as_view(),
        name=views.BySubjectArticleList.name,
    ),
    path("", views.ArticleApiRoot.as_view(), name=views.ArticleApiRoot.name,),
]
