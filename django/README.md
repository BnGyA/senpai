# DJANGO COURSE

## S02: Python refresher

### S02E04: Variables, strings, ints & print
To print the name, in the console : python3 nameofthefile.py
```
age = 26
name = 'Benjamin'

print(name)

print("hello my name is {} and i'm {}".format(name, age))
```


### S02E05: Comments & if statements

```
if  age>18:
    print("I'm more than 18")
else:
    print("I'm less  than 18")

#comments

"""multi
line
comment
"""
```
&& syntax in python is -> and
```
year = 1830 # When you check your solution, don't change this number

if year>=2000 and year<=2100:
    print('Welcome to the 21st century!')
else:
    print("You are before or after the 21st century")
```

### S02E06: Functions

```
def hello(param, age="18"):
    print('hello ' + param + 'My age is ' + age )

hello('world')
```

### S02E07: Lists

```
dognames = ["Fripon", "Chaussette"]

print(dognames)

dognames.insert(0, "Budha")

print(dognames[1])

del(dognames[1])

print(len(dognames))

dognames[1] = "Jane"
```

List in Python are `not type based`

```
yolo = [1234, true, "Benjamin"] #valid
```

### S02E08: Loops

```

for dog in dognames:
    print(dog)

for x in range(1, 10):
    print(x)


age = 0
while age<18:
    print(age)
    age += 1
```


### S02E09: Dictionaries

```
dogs = {
    "chaussette": 1,
    "fripon": 12
}


print(dogs["fripon"])


#exercice

words = ["PoGo","Spange","Lie-Fi"]
definitions = ["Slang for Pokemon Go","To collect spare change, either from couches, passerbys on the street or any numerous other ways and means","When your phone or tablet indicates that you are connected to a wireless network, however you are still unable to load webpages or use any internet services with your device"]


cooldictionary = {}
i = 0
while i < 3:
    cooldictionary[words[i]] = definitions[i]
    i += 1

```


### S02E10: Class

```

class Dog:

    def __init__(self, name, age = 0, furcolor = "brown"):
        self.name = name
        self.age = age
        self.furcolor = furcolor

    def bark(self):
        print('Bark!')

myDog = Dog("Fripon", 18, "red")

mydog.bark() #will print Bark!
```
The `self` is needed when creating a class
The reason you need to use self. is because Python does not use the @ syntax to refer to instance attributes. Python decided to do methods in a way that makes the instance to which the method belongs be passed automatically, but not received automatically: the first parameter of methods is the instance the method is called on. That makes methods entirely the same as functions, and leaves the actual name to use up to you (although self is the convention, and people will generally frown at you when you use something else.) self is not special to the code, it's just another object.


Exercice :

```
class Car:
    def __init__(self,year, make, model):
        self.year = year
        self.make = make
        self.model = model

    def age(self):
        return 2018 - self.year
```


### S03E13: Install Django

```
pip3 install django==1.11.10
```

to check if correctly installed

```
python3
import django
print(django.get_version())
```

### S03E14-15: Creating a project

```
django-admin startproject nameoftheproject
```

To start a project :
```
python3 manage.py runserver
```


### S03E16: URLs

Urls.py
```
from django.conf.urls import url
from django.contrib import admin
from . import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^hello/', views.hello),
]
```
Views.py
```
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello World!")
```


### S03E17: Django & HTML

In order to create html templates we should specify it into the settings.py at the TEMPLATES.DIRS
The views.py should be updated to

```
from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
    return render(request, 'index.html')
```


### S03E19: Sending data

```
<form action="{‰ url 'translate' ‰}">
```

We give a name of translate to the urls.py for the translate redirection and specify it into the action of the form


### S03E20: Ping latin translator

views.py
```
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def translate(request):
    toTranslate = request.GET['to_translate'].lower()


    translation = ''
    for word in toTranslate.split():
        # check if first letter is a vowel
        if word[0] in ['a', 'e', 'i', 'o', 'u']:
            translation += word
            translation += 'yay '
        # else it's a consonant
        else:
            # take the rest of the word till the end
            translation += word[1:]
            # take the first letter
            translation += word[0]
            # add the ay at the end
            translation += 'ay '
    return HttpResponse(translation)
    #return render(request, 'translate.html')
```


### S03E21: View Dictionary

In order to pass infos to the view, we have to create a dictionary

```
return render(request, 'translate.html', {'original': toTranslate, 'translation': translation})
```
And add those keys to the html
```
<p>{{original}}</p>
```

### S04E29: VirtualEnv

Create a new virtual env

```
mkvirtualenv name
easy-intall --upgrade pip
pip install django
```


### S04E30: Apps

Part of the website/app

```
python3 manage.py startapp posts
```

### S04E31: App views

In order to correctly set-up a view. The new app should be at the root level

![Alt text](apps_tree.png?raw=true "Title")

Then you should had it to the `blog>settings.py` as an INSTALLED_APPS

Then create a templates folder containing the posts/templates.html

`NOTE:` That's better to create a folder which has the same name as the app he belongs to inside the templates folder than directly create the html inside this templates folder.

Into the `blog>urls.py` you can now specify the route

```
from django.conf.urls import url
from django.contrib import admin
from posts import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.index)
]
```

And define the `posts/views`.py

```
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'posts/index.html')
```

### S04E32: Models

(https://docs.djangoproject.com/fr/2.1/topics/db/models/)
The models are stored into the database

You can find the models fields here : https://docs.djangoproject.com/en/2.1/ref/models/fields/

Some examples :
CharField, BooleanField, ..

Create those into the models.py in the right app

```
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=250)
    pub_date = models.DateTimeField()
    image = models.ImageField(upload_to='media/')
    body = models.TextField()
```

In order to add those models to our database we need to make a migration with those changes

```
python3 manage.py makemigrations
python3 manage.py migrate
```


### S04E33: Django Admin

Create the super user from the console

```
python manage.py createsuperuser
```

To add a model to the admin, we need to register it to the admin.py file

`admin.py`
```
from django.contrib import admin
from .models import Post

# Register your models here.
admin.site.register(Post)
```

We can customize the way objects are displayed into the admin via the models.py

```
def __str__(self):
    return self.title
```


### S04E34: Displaying Posts

We need to update the view to pass the posts to the html

posts/views.py
```
from django.shortcuts import render
from .models import Post


# Create your views here.
def index(request):

    posts = Post.objects.order_by('pub_date')

    return render(request, 'posts/index.html', {'posts':posts})
```

index.html
```
<!DOCTYPE html>
<hmtl>
    <head>
        <title>Blog</title>
    </head>

    <body>
        <h1>Blog</h1>
        {% for post in posts.all %}
        {{post.title}}
        {% endfor %}
    </body>
</hmtl>
```

### S04E35: Model methods

How to format the date
```
def pub_date_pretty(self)
    return self.pub_date.strftime('%b %e %Y')
```

How to summary a text
```
def summary(self):
    return self.body[:100]
```

### S04E36: Working img

We first need to update the urls.py
```
from django.conf.urls import url
from django.contrib import admin
from posts import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.index)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

Then add the media url to the settings.py

```
MEDIA_URL = '/pics/'
MEDIA_ROOT = BASE_DIR
```


### S0437: Regex

`urls.py`
```
url(r'^posts/(?P<post_id>[0-9]+)/$', views.post_details)
```

`views.py`
```
def post_details(request, post_id):
    return render(request, 'posts/post_detail.html', {'post_id': post_id})
```

### S04E38: Post details

`views.py`
```
def post_details(request, post_id):
    post = Post.objects.get(pk=post_id)
    return render(request, 'posts/post_detail.html', {'post': post})
```

To handle the 404

`views.py`
```
from django.shortcuts import render, get_object_or_404

def post_details(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'posts/post_detail.html', {'post': post})
```


to change the order_by

```
posts = Post.objects.order_by('-pub_date')
```

### S04E42: Static resources

To had a static resource :

add to the url.pattern:
```
 + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

Then in the html:

```
{% load static %}
<img src="{% static 'posts/home.jpeg' %}" alt="">
```
### S04E45: Add another app

In order to add another app, we have to edit the urls.py otherwise there will be some confusion with the views

```
import posts from views
#update it to:
import posts.views
```


## S05: VPS Stuff

connect to the server

```
ssh root@ipadress
```


Root user change password :

```
passwd
```

Add a user

```
adduser nameoftheuser
```

Give the sudo to the new user

```
usermod -aG sudo nameoftheuser
```

Change the settings to block the root user to login

```
nano /etc/ssh/sshd_config/
```
And change the PermitRootLogin to false

then :

```
systemctl reload sshd
```

List the app list

```
sudo ufw app list
```

Install a firewall with the new user

```
sudo ufw allow OpenSSH
sudo ufw enable
sudo ufw status
```

`Install pip & virtualenv`
(https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04)

1. Update the machine

```
sudo apt-get update
sudo apt-get upgrade
```

2. Install pip & nginx (we're going to use Gunicorn & nginx for the server)

```
sudo apt-get install python3-pip
sudo apt-get install nginx
```

3. Install virtualenv

```
sudo -H pip3 install --upgrade pip
sudo -H pip3 install virtualenv
```

4. Upload the code with filezilla

`The username is django`

5. Create the virtualenv on the machine

```
virtualenv venv
source venv/bin/activate
```

6. Create an exception for port 8000

```
sudo ufw allow 8000
```

7. Install django & pillow

```
pip install django
pip install pillow
```


8. Change the allowed host into the settings.py


9. Run the server
```
python3 manage.py runserver 0.0.0.0:8000
```

10. Install gunicorn

```
pip install gunicorn

gunicorn --bind 0.0.0.0:8000 blog.wsgi
```

11. Deactivate

```
deactivate
```
12. Create a Gunicorn systemd Service File

```
sudo nano /etc/systemd/system/gunicorn.service
```

Copy and paste this config
```
[Unit]
[Unit]
Description=gunicorn daemon
After=network.target

[Service]
User=django
Group=www-data
WorkingDirectory=/home/django/blog
ExecStart=/home/django/blog/venv/bin/gunicorn --access-logfile - --workers 3 --bind unix:/home/django/blog/blog.sock blog.wsgi:application

[Install]
WantedBy=multi-user.target

```

then

```
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
```


13. Set up nginx

```
sudo nano /etc/nginx/sites-available/blog
```

```
server {
    listen 80;
    server_name 95.179.156.210;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/django/blog;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/home/django/blog/blog.sock;
    }
}
```

```
sudo ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled
```

Test if it works

```
sudo nginx -t
```

Restart
```
sudo systemctl restart nginx
```

Delete the allow 8000 & allow nginx
```
sudo ufw delete allow 8000
sudo ufw allow 'Nginx Full'
```



14. Edit the settings.py

```
STATIC_ROOT =  os.path.join(BASE_DIR, 'static/')
```

```
python3 manage.py collectstatic
```

DONE!

15. Link  the custom domain

Create a new record  in the DNS section
`@ - A - IP`
Then modify the /etc/nginx/sites-available/blog and add the domain to this line :

`server_name 95.179.156.210 customdomain.com;` and also add it to the ALLOWED_HOST in the config


## SO6 : Reddit clone
### S06E61: Signup form

We're going to create a separated app for the account stuff (login & signup)

```
python manage.py startapp name
```


When we're using POST we need to add the CSRF token

```
 {% csrf_token %}
```

we now should update the signup view

```
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def signup(request):
    if request.method == "POST":
        print('The post worked')
    else:
        return render(request, 'accounts/signup.html')
```


(https://docs.djangoproject.com/fr/1.11/topics/auth/)

### S06E63: Working with users


`accounts/views.py`
```
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.contrib.auth.models import User


# Create your views here.
def signup(request):
    if request.method == "POST":
        if request.POST['password_1'] == request.POST['password_2']:
            user = User.objects.create_user(request.POST['username'], password=request.POST['password_1'])
            return render(request, 'accounts/signup.html')
        else:
            return render(request, 'accounts/signup.html', {'error' : "Passwords didnt match"})
    else:
        return render(request, 'accounts/signup.html')

```

To pass the error to the view :

`signup.html`
```
{% if error %}
{{error}}
{% endif %}
```

`Username uniqueness` + automatic login
```
# Create your views here.
def signup(request):
    if request.method == "POST":
        if request.POST['password_1'] == request.POST['password_2']:
            try:
                user = User.objects.get(username = request.POST['username'])
                return render(request, 'accounts/signup.html', {'error': "Username already taken"})
            except User.DoesNotExist:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password_1'])

                # this part will automatically login the new created user
                login(request, user)
                return render(request, 'accounts/signup.html')
        else:
            return render(request, 'accounts/signup.html', {'error' : "Passwords didnt match"})
    else:
        return render(request, 'accounts/signup.html')
```