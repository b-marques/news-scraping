from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.response import Response

from articles.models import Article
from articles.views import ArticleList
from subjects.views import SubjectList


class ApiRoot(generics.GenericAPIView):
    name = "api-root"
    queryset = Article.objects.none()

    def get(self, request, *args, **kwargs):
        return Response(
            {
                "articles": reverse(ArticleList.name, request=request),
                "subjects": reverse(SubjectList.name, request=request),
            }
        )
