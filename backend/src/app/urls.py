from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path("admin/", admin.site.urls),
    # Enables the DRF browsable API page
    path("v1/api-auth/", include("rest_framework.urls", namespace="rest_framework_v1")),
    path("v1/", include(("articles.urls", "articles"), namespace="v1")),
    path("v2/api-auth/", include("rest_framework.urls", namespace="rest_framework_v2")),
    path("v2/", include(("articles.v2.urls", "articles.v2"), namespace="v2")),
]
