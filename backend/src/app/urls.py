from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path("admin/", admin.site.urls),
    # Enables the DRF browsable API page
    path("v1/api-auth/", include("rest_framework.urls", namespace="rest_framework_v1")),
    path("v2/api-auth/", include("rest_framework.urls", namespace="rest_framework_v2")),
    path("v1/", include(("api.urls", "api"), namespace="v1")),
    path("v2/", include(("api.v2.urls", "api.v2"), namespace="v2")),
]
