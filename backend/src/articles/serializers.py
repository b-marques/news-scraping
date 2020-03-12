from rest_framework import serializers
from articles.models import Article


class ArticleListSerializer(serializers.ModelSerializer):
    text = serializers.ReadOnlyField(source="truncate_text")

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
