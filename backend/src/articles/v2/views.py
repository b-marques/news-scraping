from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from articles.views import ArticleList
from articles.models import Article


class ArticleApiRoot(generics.GenericAPIView):
    name = "articles-api-root"
    queryset = Article.objects.none()

    def get(self, request, *args, **kwargs):
        return Response({"articles-v2": reverse(ArticleList.name, request=request),})
