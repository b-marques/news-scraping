from rest_framework import generics
from rest_framework.response import Response

from subjects.models import Subject


class SubjectList(generics.ListAPIView):
    name = "subject-list"
    queryset = Subject.objects.none()

    def get(self, request, *args, **kwargs):
        return Response("Version v2 is in development.")
