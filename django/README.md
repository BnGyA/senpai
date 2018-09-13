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
```

