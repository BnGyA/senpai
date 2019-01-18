# Modern Javascript

[1. Intro & Getting started]
[2. Javascript Language Fundamentals](#javascript-language-fundamentals)

## Javascript Language Fundamentals


### Var let & const

### Data Types in Javascript

* Primitive data types:
Stores directly in the location the variable accesses
Stored on the stack

- String
- Number
- Boolean
- Null
- Undefined
- Symbols (ES6)

* Reference data types: 
Accessed by reference 
Objects that are stored on the heap
A pointer to a location in memory

- Arrays
- Object literals
- Functions
- Dates
- Anything else

Javascript is a dynamically typed language

Types are associated with values not variables
The same variable can hold multiple types
We do not need to specify types
There are supersets of JS to allow static typing (typescript ie)


### 11. Template Literals

```
const name = 'Ben';
const age = 26;
const job = 'developer';

// Without the template strings (es5)
html = '<ul>' +
        '<li>Name:' + name + '</li>' +
        '<li>Age:' + age + '</li>' +
        '<li>Job' + job + '</li>' +
        '</ul>'

// With
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${Job}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'</li>
    </ul>
`;
document.body.innerHTML = html;
```


### 13. Object Literals

```
const person = {
    firstName: 'Ben';
}
```

### 17. Function Declaration & Expression

***Function Declaration***
```
function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('hello world');
    return 'Hello ' + firstname + ' ' + lastName;
}

console.log(greet());
```

***Function Expression***
NB: Often the function in a function expression is anonymous
Function expression have benefits for hoisting & closure

```
const square = function(x){
    return x*x;
};
console.log(square(8));
```

They're actually really similar. How you call them is exactly the same. The difference lies in how the browser loads them into the execution context.
- Function declarations load before any code is executed.
- Function expressions load only when the interpreter reaches that line of code.
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

***Immidiately Invokable Function Expressions - IIFEs***
NB: They are usefull for some design pattern (ie: modul pattern)
```
(function(){
    console.log('IIFE Ran..');
})();
```

***Property methods***
Functions inside an object
```
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
todo.add();
todo.edit(15);
```


### 18. General Loop
***For loop***
```js
for (let i=0; i<10; i++){
    if(i === 2){
        console.log('2 is my fav num');
        continue; 
    }

    if(i===5){
        console.log('stop the loop');
        break;
    }

    console.log('Number: ' + i);
}
```

***While loop***
```js
let i = 0;

while(i < 10){
    console.log(i);
    i++;
}
```

***Do while loop***
Will run at least one before looking at the condition
```js

let i = 0;

do{
    console.log('Number '+ i);
    i++;
}
while(i < 10);
```

***Loop through array***

```js
const cars = ['Ford', 'Chevy', 'Honda', 'Ferrari' ];

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
});
```

***Map loop***

```js
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Ben'},
    {id: 3, name: 'Madison'},
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);
```

***For in loop***

```js
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 26
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

```

#### Block Scope with let & const

```js
var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope: ', a, b, c);

function test(){
    // Function scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}

//test();

if(true){
    // Block scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c); 
}

console.log('Global Scope: ', a, b, c);
//https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable-in-jav
```

let & const have a block scope, while var only has a function scope

## DOM Manipulation & events
- Document object model
- Tree of nodes/elements created by the browser
- Javascript can be used to read/write/manipulate the DOM
- Object Oriented Representation


Here is an exemple how to create / remove elements using the DOM
```js
const li = document.createElement('li');

li.className = 'class';
li.id = 'id';
li.setAttribute('title', 'New item');

li.appendChild(document.createTextNode('Hello')); 



const link = document.createElement('a');

link.className = 'link';
link.innerHTML = '<b>x</b>';

li.appendChild(link);

const ul = document.querySelector('ul').appendChild(li);

console.log(ul);

// Remove

const newTitle = document.createElement('h1');

newTitle.style.color = 'red';
newTitle.appendChild(document.createTextNode('JavaScript Power'))

// 
const oldTitle = document.querySelector('h1');

console.log(oldTitle);

const container = document.querySelector('.container').replaceChild(newTitle, oldTitle);

console.log(container)

```

### Event Listeners

```js

document.querySelector('.button').addEventListener('click', onClick);

function onClick(e){
    e.preventDefault();
    console.log('clicked');
    

    // event target elem
    let val = e;
    val e.target;
    console.log(val);
}
```

Also works with keyboard

```js
const button = document.querySelector('button');

button.addEventListener('click', buttonClick);

function buttonClick(e){
    e.preventDefault();
    console.log('prevented')
}

const input = document.querySelector('.input');
const text = document.querySelector('.input-text');
input.addEventListener('keyup', inputWatcher);

function inputWatcher(e){
    let val = e.target.value;
    console.log(val);
    text.innerText = val;
}
```
