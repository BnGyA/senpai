# Modern Javascript

## Javascript Language Fundamentals

### Variables - var, let & const

### Data types 

### Type Conversion

### Numbers & The Math Object

### String Methods & Concatenation

### Template literals

```js
${var}
```

### Arrays & Array Methods

### Object literals

```js
const person = {
    firstName: 'Ben';
}
```

### Dates & Times

### If Statements & Comparison Operators

### Switches

### Function Declaration & Expression

***Function Declaration***

```js
function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('hello world');
    return 'Hello ' + firstname + ' ' + lastName;
}

console.log(greet());
```

***Function Expression***

```js
const square = function(x){
    return x*x;
};
console.log(square(8));
```

NB: Often the function in a function expression is anonymous. They have benefits for hoisting & closure

Function Declaration & Function Expression are actually really similar. How you call them is exactly the same.
The difference lies in how the browser loads them into the execution context.


- Function declarations load before any code is executed.
- Function expressions load only when the interpreter reaches that line of code. So if you try to call a function expression before it's loaded, you'll get an error! If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.

***Example:***
Function Expression
```js
alert(foo()); // ERROR! foo wasn't loaded yet
var foo = function() { return 5; } 
```
Function Declaration
```js
alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
function foo() { return 5; } 
```

### IIFE 

***Immidiately Invokable Function Expressions - IIFEs*** 
They are usefull for some design pattern (ie: modul pattern)
```js
(function(){
    console.log('IIFE Ran..');
})();
```

### Property Methods
Functions inside an object

```js
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

### General Loops

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

### Block Scope (Var, let & const)
- let & const have a block scope
- var only has a function scope
(https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable-in-jav)



## DOM Manipulation & Events


### Event Listeners
```js
document.querySelector('.button').addEventListener('click', onClick);

function onClick(e){
    e.preventDefault();
    // event target elem
    let val = e;
    val e.target;
    console.log(val);
}
```
### Event Bubbling & delegation

- Bubbling : when an event occurs on an element of the page, the act of bubbling is that the event propagates itself to his parent tree
- Delegation is the opposite Bubbling

```html
<div class="card">
    <ul class="card-list">
        <li class="card-item">
            <a href="#" class="card-deleter yolo"></a>
        </li>
        <li class="card-item">
            <a href="#" class="card-deleter yolo"></a>
        </li>
    </ul>
</div>
```
***Bubbling***
```html
<div class="card">
    <ul class="card-list">
        <li class="card-item">
            content
        </li>
    </ul>
</div>
```
```js
document.querySelector('card').addEventListener('click', function(){
    console.log('card clicked');
});
document.querySelector('card-list').addEventListener('click', function(){
    console.log('card clicked');
});
document.querySelector('card-item').addEventListener('click', function(){
    console.log('card clicked');
});
```
If we click on card-item, 3 console log will appear

***Delegation***
```js
const delItem = document.querySelector('card-deleter');
delItem.addEventListener('click', deleteItem);

function deleteItem(e){
    console.log('delete item');
}
```
If we do this, only the first one will activate the function (the object added after the DOM is loaded won't trigger it either). We need to use event delegation

```js
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    if(e.target.classList.contains('card-deleter')){
        console.log('delete item');
    }
}
```

## Local Storage
The localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.


## Object Oriented Javascript

### Constructors & 'this'

***Object literals*** are great if we only need one instance of the object, if we want to create multiple instances of the same object, we need ***constructors***
```js
function Personne(prenom, nom, age, genre, interets) {
  this.nom = {
    prenom,
    nom
  };
  this.age = age;
  this.genre = genre;
  this.interets = interets;
};
```

### Prototypes

Each object in Javascript has a prototype and the prototype is an object itself. All objects inherit their properties and methods from their prototypes. When we are using an object literal, we are inheriting from an Object.prototype. When we are using a constructor, we are inheriting from it ie : Person.prototype


![Alt text](prototype.png)

The first proto is the Person.prototype The second is the Object.prototype
In our exemple, calcAge function should be defined into the prototype because the method is the same for each object

```js
Personne.prototype.saluer = function() {
  alert('Salut! Je suis ' + this.nom.prenom + '.');
};
```

***Why are we using prototypes instead ?***

To keep things modular, for efficiency, performance and maintenance. 
Someone described this in another JS course forum and it clicked for me. Imagine if several if Person Objects shared a kitchen with a microwave. They all have access to use the microwave when they want to. But they are not all walking around carrying individual microwaves. You can add more appliances to the kitchen – a blender or toaster - and Person objects can use them when they need to. 


### Prototype inheritance

In programming, we often want to take something and extend it.
For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
Prototypal inheritance is a language feature that helps in that.

```js
function Professeur(prenom, nom, age, genre, interets, matiere) {
  Personne.call(this, prenom, nom, age, genre, interets);

  this.matiere = matiere;
}
```
We are using the same properties of Personne() via the call() and we add the "matiere" property to the Professeur


***Using Object.create***
Here is another way of using objects & prototypes in javascript (just to recognize this syntax)
```js

const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
mary.getsMarried('Thompson');

console.log(mary.greeting()); // -> hello there Mary Thompson

const brad = Object.create(personPrototypes, {
    firstName: {value, 'Brad'},
    lastName: {value, 'Traversy'},
    age: {value, 36}
});
```
###ES6 classes & subclasses
ES6 classes are conveniant syntax for OOP in javascript, es6 classes won't change the way it works under the hood. The nice feature is that methods defined inside the class are automatically converted to prototypes methods

```js
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName}`;
    }
}

const ben = new Person('Ben', 'Rochez');
```

***Subclasses are prototypes inheritance in ES6***

```js
class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName); // super -> call();

        this.phone = phone;
        this.membership = membership;
    }
}
```

## Asynchronous Javascript, Ajax & Fetch API
![Alt text](ajax.png)

### XHR Object methods

**data.txt**
```txt
some text data
```

**app.js**
```js
document.getElementById('button').addEventListener('click', loadData);
function loadData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }
    xhr.onrerror = function(){
        console.log('Request error...');
    }
    xhr.send();
    // HTTP Statuses
    // 200: OK
    // 403: Forbiden
    // 404: Not found
}
```

### Ajax & JSON

**customer.json**
```json
[
    {
        "id": 1,
        "name": "John Doe",
        "company": "123 Designs",
        "phone": "4242-4242-42"
    },
    {
        "id": 2,
        "name": "Mary Doe",
        "company": "456 Designs",
        "phone": "4242-4242-42"
    }
]
```
**app.js**
```js
document.getElementById('button').addEventListener('click', loadCustomers);

function loadCustomers(e){
    const xhr : bew XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            customers.forEach(function(customer){
                let output += `
                <ul>
                    <li>${customer.id}</li>
                    <li>${customer.name}</li>
                    <li>${customer.company}</li>
                    <li>${customer.phone}</li>
                </ul>
            `;
            })
            
            document.getElementById('customer').innerHTML = ouptut;

        }
    }
    xhr.send();
}
```


### REST API's
API
- Application programming interface
- Structured request and response

REST
- Reprensentational State Transfer
- Relies on a stateless, client-server protocol, almost always HTTP
- Treats server objects as resources that can be created, read or destroyed
- Can be used by virtually any programming language

---
- GET: retrieve data from a specified resource
- POST: submit data to be processed to a specified resource
- PUT: Update a specified resource
- DELETE: Delete a specified resource

- HEAD: Same as get but does NOT return a body
- OPTIONS: returns the supported http methods
- PATCH: update partial resource

### Callback functions
https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced 
Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

```js
function greeting(name) {
  alert('Bonjour ' + name);
}

function processUserInput(callback) {
  var name = prompt('Entrez votre nom.');
  callback(name);
}

processUserInput(greeting);
```


### ES6 promises
(https://javascript.info/promise-basics, https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

![Alt text](promise-resolve-reject.png)
```js
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
```
The function passed to new Promise is called the executor. When the promise is created, this executor function runs automatically. It contains the producing code, that should eventually produce a result. In terms of the analogy above: the executor is the “singer”.

The resulting promise object has internal properties:
- state — initially “pending”, then changes to either “fulfilled” or “rejected”,
- result — an arbitrary value of your choosing, initially undefined.

When the executor finishes the job, it should call one of the functions that it gets as arguments:
- resolve(value) — to indicate that the job finished successfully:
    - sets state to "fulfilled",
    - sets result to value.
- reject(error) — to indicate that an error occurred:
    - sets state to "rejected",
    - sets result to error.


```js
var keepsHisWord;
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
console.log(promise1);
```

![Alt text](promises.png)


### Fetch API

```js
document.getElementById('button1').addEventListener('click', getText);

function getText(){
    //return a promise
    fetch('test.txt')
    .then(function(res){
        // return a promise
       return res.text();
    })
    //get the promise from res.text()
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err){
        console.log(err);
    });
}
```
Why don't we need to parse the JSON with fetch ? 
***What I accidentally discovered is that the .json() method actually parses the data already. So essentially it's a .text() with a JSON.parse() built-in.
You can test this by returning res.text() on the JSON file, and then parsing that data in the next .then(). It works the same way, but is obviously more code.***

### Arrow function

https://medium.com/beginners-guide-to-mobile-web-development/everything-you-need-to-know-about-es6-arrow-functions-and-lexical-this-19cce1a49bdf amazing article
```js
// No parameters
() => { statements }
// single parameter
(param) => { statements }
param => { statements } 
// multiple parameters
(param1,param2,....paramN) => { statements }
// Returning objects
// enclose objects by parenthesis so they can be treated as objects
(param1,param2) => ( { id: 1 , key: value });
```

Arrow function has a lexical this. Earlier, every new function defined its own this value. This proved to be less than ideal for an object-oriented style of programming. An arrow function does not newly define its own this when it's being executed.The value of this is always inherited from the enclosing scope.

### Async & Await


Async makes a function a promise and await makes something wait until a  promise is resolved

```js
async function getUsers(url){
    // await response of the fetch call
    const response = await fetch(url);

    // Only proceed once its resolved
    const data = await response.json();
    // Only proceed once the second promise is resolved
    return data;
}

getUsers('https://jsonplaceholder.typicode.com/posts').then(users => console.log(users));
```