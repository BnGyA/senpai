from rest_framework import serializers
from .models import Article


#https://www.django-rest-framework.org/api-guide/serializers/
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'