from rest_framework import serializers
from authors.models import Author


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "name",
            "picture",
        )
        model = Author
