from django.urls import path, re_path

from subjects import views

urlpatterns = [
    path("subjects/", views.SubjectList.as_view(), name=views.SubjectList.name),
    re_path(
        r"^subjects/(?P<pk>\d+)/$",
        views.SubjectDetail.as_view(),
        name=views.SubjectDetail.name,
    ),
]
