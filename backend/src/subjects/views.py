from subjects.models import Subject
from subjects.paginations import SubjectPagination
from subjects.serializers import SubjectSerializer


class SubjectList(generics.ListAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    pagination_class = SubjectPagination
    name = "subject-list"


class SubjectDetail(generics.RetrieveAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    name = "subject-detail"
