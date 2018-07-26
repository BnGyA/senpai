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

### Truthy and Falsy value and equality operators

Falsy:  value considered false when evaluated inside an if/else statement condition

Falsy values : undefined, null, 0, '', NaN
Truthy values : !falthy values

```javascript
var height;

//height = 24;

if(height){
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined");
}
```

This is an handy way to check if a var is defined or not !