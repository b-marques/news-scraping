from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings
from django.db import connection
from background_task.models import Task
from scraping.tasks import crawl_news


urlpatterns = [
    path("admin/", admin.site.urls),
    # Enables the DRF browsable API page
    path("v1/api-auth/", include("rest_framework.urls", namespace="rest_framework_v1")),
    path("v2/api-auth/", include("rest_framework.urls", namespace="rest_framework_v2")),
    path("v1/", include(("api.urls", "api"), namespace="v1")),
    path("v2/", include(("api.v2.urls", "api.v2"), namespace="v2")),
]

# Check the existence of background_task table, prevents crash during system
# check, when "Task.objects.all().exists()" is called before manage.py migrate.
all_tables = connection.introspection.table_names()
bg_tables = set(["background_task"])
existing_tasks_tables = bg_tables.intersection(all_tables)
if bool(existing_tasks_tables):
    # Create Tasks to be schedule if not exists
    if not Task.objects.all().exists():
        crawl_news(repeat=7200, repeat_until=None)
