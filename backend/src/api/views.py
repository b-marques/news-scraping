from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.response import Response

from articles.models import Article
from articles.views import ArticleList, ArticleDetail, BySubjectArticleList
from subjects.views import SubjectDetail, SubjectList


class ApiRoot(generics.GenericAPIView):
    name = "api-root"
    queryset = Article.objects.none()

    def get(self, request, *args, **kwargs):
        return Response(
            {
                "articles": reverse(ArticleList.name, request=request),
                "article-detail": reverse(
                    ArticleDetail.name, kwargs={"pk": "0"}, request=request
                ),
                "by-subject-articles": reverse(
                    BySubjectArticleList.name,
                    kwargs={"subject": "subject"},
                    request=request,
                ),
                "subjects": reverse(SubjectList.name, request=request),
                "subject-detail": reverse(
                    SubjectDetail.name, kwargs={"pk": "0"}, request=request
                ),
            }
        )
