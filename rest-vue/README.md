# Rest-vue

## API

#### Create a new django project
```
virtualenv venv -p $(which python3)
source venv/bin/activate
pip install Django
django-admin startproject myproject
```

Create an app
```
python manage.py startapp article
```

Add it to the settings > INSTALLED_APPS
```python
INSATLLED_APPS = [
    .................
    'articles'
    .................
]
```

Create a model for the articles
https://docs.djangoproject.com/en/2.0/topics/db/models/

models.py
```python
# Create your models here.
class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    article_heading = models.CharField(max_length=250)
    article_body = models.TextField()
```

Make the migration to apply this model to the db

```
python manage.py makemigrations
python manage.py migrate
```

#### Install django rest framework 
It will handle the REST API part

```
pip install djangorestframework
```

Add it to the settings > INSTALLED_APPS

```
INSATLLED_APPS = [
    .................
    'articles',
    'rest_framework'
    .................
]
```
#### Create serializer, viewset and routers
Inside the article create a file *serializers.py* it contains serializers for you api. Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types.

```python
from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
```
First of all we import the serializers class from the rest framework library and then import the model whose data we have to structure. Define a class for our serializers having the base class as a rest framework serializer. In the meta description mention the models and it’s fields

http://www.django-rest-framework.org/api-guide/serializers/

Now Let’s create Viewsets. Create a viewsets.py inside the same folder.

Django REST framework allows you to combine the logic for a set of related views in a single class, called a ViewSet.

```python
from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
```

First we import the viewsets class and then our model and serializers(which we created in previous step). Now define the viewset class ArticleViewSet in which we define the queryset the data we got when we query and then the serializer_class to serialize that data.

http://www.django-rest-framework.org/api-guide/viewsets/


Create a file routers.py inside the myproject folder where there is settings.py and urls.py file is present.

```python
from rest_framework import routers
from article.viewsets import ArticleViewSet

router = routers.DefaultRouter()

router.register(r’article’, ArticleViewSet)
```
We define the function router where we later enter our viewset for various urls, now api would be somewhat like /article linked to ArticleViewSet.

http://www.django-rest-framework.org/api-guide/routers/

Now we import this routers file inside the urls.py which contain all the url routes of our app.

```python
from django.contrib import admin
from django.urls import path, include
from .routers import router

urlpatterns = [
 path(‘admin/’, admin.site.urls),
 path(‘api/’, include(router.urls))
]
```

We have imported our router file to include all urls built inside the routers file. We have added the api/ keyword just to seperate the api urls now they will called from /api/article.


Following api’s
```
GET: /api/article/ (This will give all articles)

POST: /api/article (This will help to add new article)

DELETE: /api/article/{article_id}/ (This will help to delete the article)

GET: /api/article/{article_id}/ (This will return particular article)

PUT: /api/article/{article_id}/ (This will help to update all the fields of a particular article)

PATCH: /api/article/{article_id}/ (This will help to make a patch inside the article)
```

#### Dealing with CORS

In order to manage CORS (https://stackoverflow.com/questions/35760943/how-can-i-enable-cors-on-django-rest-framework)

```
pip install django-cors-headers
```

settings.py
```python
INSTALLED_APPS = (
    ...
    'corsheaders',
    ...
)
```

Then add a middleware class to listen in on responses:

settings.py
```python
MIDDLEWARE_CLASSES = (
    ...
    'corsheaders.middleware.CorsMiddleware',  
    'django.middleware.common.CommonMiddleware',  
    ...
)

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = (
    'localhost:8080',
)
CORS_ORIGIN_REGEX_WHITELIST = (
    'localhost:8080',
)
```

#### Slash convention

In order not to have to add a slash at the end of the API's url

router.py

```python
router = DefaultRouter(trailing_slash=False)
```

## APP
Create a new vue-js app with vuetify

```
vue create projectname
```

Use the router babel & linter, use history mode (no # in the url), ESLint with error prevention only, lint on save, in package.json

Before installing vuetify, you have to init the project 

```
vue add vuetify
```

Install axios to fetch data from the API

```
yarn add axios
```


```js
axios.get('http://127.0.0.1:8000/api/article/').then((res) =>{      
    console.log(res)
})
```
Tadam!