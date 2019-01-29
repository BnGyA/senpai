from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer

#https://www.django-rest-framework.org/api-guide/viewsets/
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer