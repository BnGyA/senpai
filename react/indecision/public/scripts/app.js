'use strict';

console.log('App.js is running! ');
var appRoot = document.getElementById('app');

// JSX - Javascript XML

var app = {
    title: 'Indecision app',
    subtitle: 'This is JSX from app.js',
    options: ["One", "Two"]
};

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
        'p',
        null,
        app.options.length > 0 ? 'Here are your options : ' + app.options : 'No options'
    )
);

// Profil page

var user = {
    name: 'Ben',
    age: 26,
    location: 'Belgium'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

ReactDOM.render(template, appRoot);
