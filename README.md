# Senpai

"The Complete JavaScript Course 2018: Build Real Projects!" notes

## Basics

Javascript is a lightweight, cross-platform, object-oriented computer programming language


### variables

var Firstname = 'John';

### Primitive JS Data Types

1. Number
2. String
3. Boolean
4. Undefined: does not have a value yet
5. Null: means 'non-existent'

Javascript has dynamic typing: data types are automatically assigned to variables


### Variable Mutation and Type Coercion

Type coercion :
console.log(firstname + ' ' + age);

Type coercion means that when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type. For instance, if you do:

"benjamin" + 10 -> "benjamin" + "10" -> "benjamin10". The 10 is converted to a number
10 + false = 10 + 0 = 10
10 + true = 10 + 1 = 11

var mutation : var type can be changed
var age = 28
age = 'twenty eight'

### Basic Operators

### Operator Precedence


### If / else statements
```javascript
if(something){
    Do something
} else if(something else){
    Do things
} else{
    Do another thing
}
```

### Boolean logic

AND (&&)
OR (||)
NOT (!)

| AND           | TRUE          | FALSE |
| ------------- |:-------------:| -----:|
| **TRUE**      | `TRUE`        |`FALSE`|
| **FALSE**     | `FALSE`       |`FALSE`|


| OR            | TRUE          | FALSE |
| ------------- |:-------------:| -----:|
| **TRUE**      | `TRUE`        |`TRUE` |
| **FALSE**     | `TRUE`        |`FALSE`|


### The ternary Operator

```javascript
var name = 'Ben';
var age = '18';

age >= 18 ? console.log('he can drink beer') : console.log("he can't drink alcool");

equivalent :

if(age>=18){
    console.log('he can drink beer')
} else {
    console.log("he can't drink alcool");
}
```


### Switch Statement

```javascript
var job = 'teacher';

switch(job){
    case 'teacher':
        console.log("he's a teacher");
        break;
    case 'drivers':
        console.log("he's a driver");
        break;
    default:
        console.log('he does something else');
}
```

break is used to stop the execution if the case match the condition (faster code).

### Truthy and Falsy value

Falsy:  value considered false when evaluated inside an if/else statement condition

Falsy values : undefined, null, 0, '', NaN
Truthy values : !falthy values

```javascript
var height;

//height = 24;

if(height || height == 0){
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined");
}
```

This is an handy way to check if a var is defined or not.
You've to check if = 0 because 0 is also a falsy!


### Equality operators

23 == '23' -> true because JavaScript does type coercion
23 === '23' -> false because of the strict equality operator


### Functions

*Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.*


```javascript
function calcAge(birthYear){
    return 2018 - birthYear;
}

calcAge(1992);
```

### Functions statements & functions expressions
function statement:

```javascript
function whatDoYouDo(job, firstName){

}
```
function expression:
```javascript
var whatDoYouDo = function(job, firstName){

}
```

Function declarations load before any code is executed.
Function expressions load only when the interpreter reaches that line of code and always produce a result.

So if you try to call a function expression before it's loaded, you'll get an error! If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.

Example: Function Expression
```
alert(foo()); // ERROR! foo wasn't loaded yet
var foo = function() { return 5; }
```
Example: Function Declaration
```
alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
function foo() { return 5; }
```


### Arrays
```
var names = ['John', 'Mark', 'Jane']; //most used syntax
var years = new Array(1990, 1969, 1948);

var yo = ['John', '1990', false];

console.log(names[0]); // -> 'John'
```

Arrays are 0 based.
You can put different data types inside the same array

#### Arrays' methods

```javascript

var test = [];

test.push('blue'); //- add to the end
test.unshift('yo'); //- add to the beginning

test.pop(); //- delete the last item
test.shift(); //- delete the last item
test.indexOf(1990); //- gives the index of an element

```


### Objects and properties


```javascript

var obj = {
    firstName: 'Benjamin',
    lastName: 'Rochez'
}

console.log(obj.firstName);

obj.job = 'developer';

console.log(obj); // job will be added as a property
```

firstName is a key, a property of the object obj.


### Objects and Methods
```javascript

var obj = {
    firstName: 'Benjamin',
    lastName: 'Rochez',
    birthYear: 1992,
    calcAge: function(){
        return 2018 - this.birthYear;
    }
}

console.log(obj.calcAge());

obj.age = obj.calcAge();
```


this means the current object.

### Loops & iteration

For loop
```
for (var i=0; i<10; i++){
    console.log(i);
}


var john = ['Ben', 'Madison', 1990];

for (var i=0; i<john.length; i+){
    console.log(john[i]);
}
```

While loop
```
var i = 0;

while(i<john.length){
    console.log(john[i]);
    i++;
}
```

Continue & break statements
```
var john = ['John', 'Smith', 1900, false];

for (var i = 0; i<john.length; i++){
    if (typeof john[i] !== 'string') continue;
    //if (typeof john[i] !== 'string') break;
}
```


## How JavaScript works behind the scene
