# REACT

React uses JSX -> Javascript XML , doesn't make part of the javascript core but is an extension to the JS made available by React.

```javascript
var template = <p>This is JSX from app.js</p>;
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
```


This JavaScript can't be rendered as it is, we first need to compile it with Babel (like scss needs to be compiled to css).
The code behind would be compiled to

```javascript
var template = React.createElement(
'p',
null, //attributes object (id, class, ..)
'This is JSX from app.js'
);
```

### Babel

Babel as such is just a compiler. In order to make it work with React & ES6, we need to install plugins with it.


```
yarn global add babel-cli@6.24.1
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```


### JSX


```
var template = (
    <div>
        <h1>Indecision app</h1>
        <p>This is JSX from app.js</p>
    </div>
);
```

JSX neeeds only one root element, that's the reason of the wrapping div.
The (); are only there to make the code more readable.


### Variables

```
var user = {
    name: 'Anderw',
    age: 26
}
var templateTwo = (
    <div>
        {user.name}
        {user.age}
    </div>
)
```


### Condition rendering in JSX

if statements, ternary operators & logical and operator

```
function getLocation(location){
    if (location){
        return <p>Location: {location} </p>
    }
}
{getLocation(user.location)}
```
Here we don't need to specify the else statement, because undefined will just render nothing if used into JSX espression.

Ternary operator reminder
```
true ? 'Andrew' : 'Anonymous' //-> if true Andrew, else anonymous


<h1>{user.name ? user.name : 'Anonymous'}</h1>
```
This is great to use when you wanna do something if true or something else if false.


Logical and operator

```

{(user.age && user.age >= 18) && <p>{user.age}</p>} // if user.age exist && user.age >= 18 print user age, else nothing

```
This is great to use when you wanna do something if true and nothing if not


### ES6 aside

```
var nameVar = "Ben";
var nameVar = "Yo";

// In JS you can redeclare a var
//nameVar = 'Mike';


// In ES6 you cant redeclare a var
console.log('nameVar :', nameVar);

let nameLet = 'Ju';
nameLet = 'Bro';
//let nameLet = 'Yo'; -> error
console.log('nameLet :', nameLet);

const nameConst = 'Frank';
console.log('nameConst :', nameConst);
```

#### Var scope

```
function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName(); //-> will return the petName

console.log(petName); // will throw an error because you can't access petName
```

let & const are also tied to their scope.
BUT : `block scoping`

#### Block scoping

```
var fullName = 'Benjamin Rochez';
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); // -> will work, because firstName isnt in a function here but in a if block condition

```
`Const`
```
var fullName = 'Benjamin Rochez';
if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); // -> wont work because const & let are also tied to block scoping

```

The solution is to declare it outside of the if statement

```
var fullName = 'Benjamin Rochez';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); // -> will work
```

We will always start with const & if we see that we need to re-asign the value, we'll transform those to let.


### ES6 arrow function

```
// ES5 syntax anonymous function
const square = function(x) {
    return x*x;
};

//or a declared function

function square(x) {
    return true;
}

// ES6 are all anonymous
const squareArrow = (x) =>{
    return x*x;
};

const squareArrow = (x) => x*x; // if only returns something, new syntax


const getFirstName = (fullname) => fullname.split(' ')[0];
console.log(getFirstName('Benjamin Rochez'));
```

