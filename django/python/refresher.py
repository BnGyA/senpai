age = 26
name = 'Benjamin'

print(name)

print("hello my name is {} and i'm {}".format(name, age))


if  age>18:
    print("I'm more than 18")
else:
    print("I'm less  than 18")

#comments

def hello(param, age="18"):
    print('hello ' + param + 'My age is ' + age )

hello('world')