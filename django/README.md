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
