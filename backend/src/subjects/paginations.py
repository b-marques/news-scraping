from rest_framework.pagination import PageNumberPagination


class SubjectPagination(PageNumberPagination):
    page_size = None
