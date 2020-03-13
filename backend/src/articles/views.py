from django.shortcuts import render
from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.response import Response

from articles import serializers
from articles import paginations
from articles.models import Article
from subjects.models import Subject


class ArticleApiRoot(generics.GenericAPIView):
    name = "article-api-root"
    queryset = Article.objects.none()

    def get(self, request, *args, **kwargs):
        return Response(
            {
                "articles": reverse(ArticleList.name, request=request),
                "by-subject-articles": reverse(
                    BySubjectArticleList.name,
                    kwargs={"subject": "subject"},
                    request=request,
                ),
                "article-detail": reverse(
                    ArticleDetail.name, kwargs={"pk": "0"}, request=request
                ),
            }
        )


class ArticleList(generics.ListAPIView):
    queryset = Article.objects.all().order_by("-publish_date")
    serializer_class = serializers.ArticleListSerializer
    pagination_class = paginations.ArticlePagination
    name = "article-list"


class BySubjectArticleList(generics.ListAPIView):
    serializer_class = serializers.ArticleListSerializer
    pagination_class = paginations.ArticlePagination
    name = "subject-article-list"

    def get_queryset(self):
        self.subject = get_object_or_404(Subject, name=self.kwargs["subject"])
        return Article.objects.filter(subject=self.subject).order_by("-publish_date")


class ArticleDetail(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = serializers.ArticleDetailSerializer
    name = "article-detail"
