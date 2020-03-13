from django.urls import path, include

from api.views import ApiRoot


urlpatterns = [
    path("", ApiRoot.as_view(), name=ApiRoot.name,),
    path("articles/", include("articles.urls")),
    path("subjects/", include("subjects.urls")),
]
