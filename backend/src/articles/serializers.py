from rest_framework import serializers
from articles.models import Article
from authors.serializers import AuthorSerializer
from subjects.serializers import SubjectSerializer


class ArticleListSerializer(serializers.ModelSerializer):
    text = serializers.ReadOnlyField(source="truncate_text")
    author = AuthorSerializer()
    subject = SubjectSerializer()

    class Meta:
        fields = (
            "id",
            "slug",
            "title",
            "hero_image",
            "author",
            "subject",
            "publish_date",
            "text",
        )
        model = Article


class ArticleDetailSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    subject = SubjectSerializer()
    
    class Meta:
        fields = (
            "id",
            "slug",
            "title",
            "hero_image",
            "author",
            "subject",
            "publish_date",
            "text",
        )
        model = Article
