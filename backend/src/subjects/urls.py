from django.urls import path, re_path

from subjects import views

urlpatterns = [
    path("", views.SubjectList.as_view(), name=views.SubjectList.name),
    re_path(
        r"^(?P<pk>\d+)/$", views.SubjectDetail.as_view(), name=views.SubjectDetail.name,
    ),
]
