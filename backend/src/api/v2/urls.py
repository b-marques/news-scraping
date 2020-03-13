from django.urls import path, include

from api.v2.views import ApiRoot


urlpatterns = [
    path("", ApiRoot.as_view(), name=ApiRoot.name,),
    path("articles/", include("articles.v2.urls")),
    path("subjects/", include("subjects.v2.urls")),
]
