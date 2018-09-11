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

## Section 3: Hello React
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


## Section 4 : React Components

![Alt text](indecision/public/assets/components.png?raw=true "Title")


### S04E24-25: ES6 classes

Classes are like blueprints

```
class Person {
    constructor(name = 'Anonymous', location = 'Somewhere'){
        this.name = name;
        this.location = location;
    }

    getLocation() {
        //return 'Location : ' + this.location;
        // in es6
        `Location : ${this.location}`;
    }
}
const me = new Person('Benjamin Rochez', 'Belgium');
const anon = new Person();
console.log(me.getLocation);
console.log(anon.getLocation);
```

We have to define a constructor function to access the Person() arguments


Imagine having a class who would be a child of another, it would take the same parameters & methods

```
class Student extends Person{
    contructor(name, location, age){
        super(name, location);
        this.age = age;
    }

    getLocation(){
        let location = super.getLocation();
        return location; // will return the parent location method :)
    }
}

const student = new Student('Mica', 'Belgium', 26);
```
super(); will "import" the parameters of the parent class
When you're extending a class you don't have to redefine the default values

`Note`

```
!undefined -> true
!!undefined -> false

hasMajor(){
    return !!this.major;
}

// this function will return true if he has major defined, false if not;
```


### S04E26: Create a React component
To create a React component, we need to extend the React class & use the render method.

```
class Header extends React.Component{
    render() {
        return <p>This is from Header</p>
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

```

### S04E27: Nesting components

```
class Root extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Actions />
            </div>

        )
    }
}


ReactDOM.render(<Root />, document.getElementById('app'));
```

### S04E28: Components props

```
<Header title="Title goes here" />

class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

```

Better organized as follow
```
let title = "Here goes the title";
let subtitle = "Here goes the subtitle";
<Header title={title} subtitle={subtitle} />

class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

```

Complex organisation below:
```
class IndecisionApp extends React.Component {
    render() {

        let title = 'IndecisionApp';
        let subtitle = 'Put your life decision to a computer';
        let options = ['Option 1', 'Option 2', 'Option 3'];

        return (

            <div>
                <Header title={title} subtitle={subtitle}/>
                <Options options={options}/>
                <AddOption />
                <Action />
            </div>
        );
    }
}
class Options extends React.Component{
    render(){
        return (
            <div>
                <p>Here are the options</p>
                <Option options={this.props.options}/>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                 <ul>
                {
                    this.props.options.map((option) => <li key={option}>{option}</li>)
                }
                </ul>
            </div>
        )
    }
}
```


Even better

```

class Options extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ul>
            </div>
        )
    }
}


class Option extends React.Component{
    render(){
        return (
            <div>
                <li>
                    {this.props.optionText}
                </li>
            </div>
        )
    }
}
```


### S04E29: Event handler

```
class Action extends React.Component {
    handlePick(){
            alert('something');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do ?</button>
            </div>
        )
    }
}
```


### S04E30: Method binding

```

const obj = {
    name: 'benjamin',
    getName(){
        return this.name;
    }
};

const getName = obj.getName;
console.log(obj.getName());
console.log(getName);
```

The first console.log would work because of the context of the object, but we are loosing this context into the second console.log;


```
const getName = obj.getName.bind(obj);
console.log(getName);

const getOtherName = obj.getName.bind({name: 'Andrew'});
console.log(getOtherName);
```

The `bind` method will transfer the context. Actually the parameter of bind() can be anything and will be as if it was the `this`;
Interesting link : `https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb`

```
class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options)
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ul>
                <button onClick={this.handleRemoveAll}>Remove all options</button>
            </div>
        )
    }
}
```
That's better for performance wise to make it into the constructor because constructor is called once the app is loaded.

### S04E31-33: Component state

`MOST CONFUSING PART`

![Alt text](indecision/public/assets/component_state.png?raw=true "Title")

Step 1 : Add the initial state to the constructor

```
this.state = {
  count: 0
};
```

Step 2 : Render with the default value by adding on the right place

```
<h1>Count: {this.state.count}</h1>
```

Step 3: Change the state based on event

```
handleAddOne(){
    this.setState((prevState) => {
        return{
            count: prevState.count + 1
        }
    });
}
```

Even if we define multiple state objects, we don't need to define each of those in the setState as only the updated one will be re-rendered.

### S04E34: Alternative setState Syntax

There's an older way to do that but `it's not recommended`

```
this.setState({}
    count: 0
);
```

We're using state because props only have a one way communication and we need child to be able to talk to the parents.

### S04E36-37

Validation :
```
//Into the RootApp

handleAddOption(option){
    if(!option){
        return 'Enter a valid value to add item';

        //else if indexOf > -1 will trigger if already exists
    } else if (this.state.options.indexOf(option) > -1){
        return 'This option already exists';
    }
    this.setState((prevState)=>{
        //options: prevState.options.push(this.props.option) -> not correct because we are manipulating the prevState and we don't want to do such a thing
       return{
           options: prevState.options.concat(option)
       }
    });
}



// Into AddOption component

constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
        error: undefined
    }
}

// we're keeping the main logic here in the Addoption and using the handleAddOption from the parent in the child function
handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
        return {
            //error: error in ES6 you can only put error
            error
        };
    });
}


// Into the render AddOption component
{this.state.error && <p>{this.state.error}</p>}
```

### S04E38 :

![Alt text](indecision/public/assets/props_vs_state.png?raw=true "Title")



