from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.response import Response

from articles import serializers
from articles import paginations
from articles.models import Article
from subjects.models import Subject


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
        if not Subject.objects.filter(name=self.kwargs["subject"]).exists():
            return Article.objects.none()
        self.subject = Subject.objects.filter(name=self.kwargs["subject"])
        return Article.objects.filter(subject=self.subject).order_by("-publish_date")


class ArticleDetail(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = serializers.ArticleDetailSerializer
    name = "article-detail"
