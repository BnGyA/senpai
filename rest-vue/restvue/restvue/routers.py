from rest_framework import routers
from article.viewsets import ArticleViewSet

#https://www.django-rest-framework.org/api-guide/routers/
router = routers.DefaultRouter()

router.register(r'article', ArticleViewSet, basename='article')