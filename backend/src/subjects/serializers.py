from rest_framework import serializers
from subjects.models import Subject


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "name",
            "color",
        )
        model = Subject
