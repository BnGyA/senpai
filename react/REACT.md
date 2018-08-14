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

#### Argument object

No longer bound with arrow function

```
var add = function (a, b){
    console.log(arguments);
    return a+b;
};

console.log(add(55, 1, 1001)); // would work and arguments would be displayed

// but in ES6

const add = (a,b) => {
    console.log(arguments);
    return a+b;
}

// an error is thrown

```

#### This
```
const user = {
    name: 'Andrew,
    cities: ['Brussels', 'Mons', 'La louvière'],
    printPlacesLived: function () {
        console.log(this.name);


        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in' + city);
        });
    }
};

user.printPlacesLived();
```
That would throw an error because this.name isnt accessible inside this.cities.forEach function.
Here's a workaround, by defining a const that equal to this.

```
const user = {
    name: 'Andrew,
    cities: ['Brussels', 'Mons', 'La louvière'],
    printPlacesLived: function () {
        console.log(this.name);
        const that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in' + city);
        });
    }
};

user.printPlacesLived();
```

but if we use an arrow function, it would work because with arrow function, the function use the this of the context they have been created in
```
const user = {
    name: 'Andrew,
    cities: ['Brussels', 'Mons', 'La louvière'],
    printPlacesLived: function () {
        console.log(this.name);

        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in' + city);
        });
    }
};

user.printPlacesLived();
```

Sometimes you don't want to use the arrow function; for exemple for the prinPlacesLived. Where ? For a method for exemple. Why ? Because, if you do, the printPlacesLived, it wont bind its own value so its no longer equal to the object. It goes up to the parent scope, which in this case is undefined.

So here, we can use ES5 function to use the this binded to cities, and then the foreach an ES6 arrow function to bind it to the parent's scope which is the same.

`BUT !`
There's a new ESX method definition syntax and it allows us to clean this up a little bit

```
const user = {
    name: 'Andrew,
    cities: ['Brussels', 'Mons', 'La louvière'],
    printPlacesLived() {
        console.log(this.name);

        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in' + city);
        });
    }
};

user.printPlacesLived();
```

this looks weird but `printPlaceLived(){};` in ES6 = `printPlacesLived: function (){};`


#### Map

Map is an array method like forEach but it works a bit differently


```
const user = {
    name: 'Andrew,
    cities: ['Brussels', 'Mons', 'La louvière'],
    printPlacesLived: function () {

        const cityMessages = this.cities.map((city) =>{
            //return city + '!'; // each city will have a ! at the end.
            return this.name + ' has lived in ' + city + '!';
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());
```


With map, you can transform each item and getting a new array back & that's really useful!


This can be simplified to
```
const user = {
    name: 'Andrew,
    cities: ['Brussels', 'Mons', 'La louvière'],
    printPlacesLived: function () {

        return this.cities.map((city) =>{
            return this.name + ' has lived in ' + city + '!';
        });


    }
};

console.log(user.printPlacesLived());
```

because we dont need a const here to return a function, and then simplify more

```
const user = {
    name: 'Andrew,
    cities: ['Brussels', 'Mons', 'La louvière'],
    printPlacesLived: function () {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!' );
    }
};

console.log(user.printPlacesLived());
```
because we're only returning something!


### S03E16: Events and Attributes

Attributes in JSX can be a little bit different, for example, id="test" is correct but class="class" won't work, instead we should use className="class"


### S03E17: Manual data binding

For now, we're going to re-render the page when we update the counter.

```
let count = 0;
const addOne = ()  =>  {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--
    renderCounterApp();
};
const reset = () => {
    count = 0
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
```

That seems freaking weird to re-render the whole page even for a simple counter but actually React is really efficient behind the scene and will only re-render the things which are changing.
To see this, you can open the developer panel at the element tab. The element who are re-rendered in the dom are going to 'flash'.
`Even if we re-render the whole app in our code, React uses some virtual DOM to only render the changing elements`


### S03E18 Forms & inputs
There's a react handler for the onSubmit

```
const app = {
    title: 'Indecision app',
    subtitle: 'This is JSX from app.js',
    options: ["One", "Two"]
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};


const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ?  'Here are your options : '+ app.options : 'No options'}</p>

            <form onSubmit={onFormSubmit}>
                <input type="text" name='option' />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

};

render();
```

### S03E19: Arrays in JSX

JSX supports string, numbers & arrays by default
JSX doesnt supports objects & ignores booleans, null or undefined

```
{
    [1, 2, 3] //- will render 123 on the screen
}
{
    [<p></p>, <p></p>, <p></p>] //- will render 3 p but will throw an error because it needs a key for each element to be able to recognize those.
    [<p key="1"></p>, <p key="2"></p>, <p key="3"></p>]
}
```

```
const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                })
            }
        </div>
    )
}
```

