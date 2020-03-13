from rest_framework import generics
from rest_framework.response import Response

from articles.models import Article


class ArticleList(generics.ListAPIView):
    name = "article-list"
    queryset = Article.objects.none()

    def get(self, request, *args, **kwargs):
        return Response("Version v2 is in development.")
