'use strict';

console.log('App.js is running! ');
var appRoot = document.getElementById('app');

// JSX - Javascript XML

var app = {
    title: 'Indecision app',
    subtitle: 'This is JSX from app.js',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

// Remove all button

var resetForm = function resetForm() {
    app.options = [];
    render();
};

// Make decision

var makeDecision = function makeDecision() {
    var answer = app.options[Math.floor(Math.random() * app.options.length)];
    alert(answer);
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'ul',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: makeDecision },
            'What Should I do ?'
        ),
        React.createElement(
            'button',
            { onClick: resetForm },
            'Reset'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();

// Profil page

/*const user = {
    name: 'Ben',
    age: 26,
    location: 'Belgium'
};

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);*/

/* COUNTER

let count = 0;
const addOne = ()  =>  {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
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
    renderCounterApp();
};*/
