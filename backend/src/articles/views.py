from django.shortcuts import render

from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from articles import serializers
from articles.models import Article


class ArticleApiRoot(generics.GenericAPIView):
    name = "articles-api-root"
    queryset = Article.objects.none()

    def get(self, request, *args, **kwargs):
        return Response({"articles": reverse(ArticleList.name, request=request),})


class ArticleList(generics.ListAPIView):
    queryset = Article.objects.all().order_by("-publish_date")
    serializer_class = serializers.ArticleListSerializer
    PageNumberPagination.page_size = 10
    name = "article-list"


class ArticleDetail(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = serializers.ArticleDetailSerializer
    name = "article-detail"
