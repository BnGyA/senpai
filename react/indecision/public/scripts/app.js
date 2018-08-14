'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Build it visible'
};

var spoiler = false;

var spoil = function spoil() {
    spoiler = !spoiler;
    console.log(spoiler);
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
        React.createElement(
            'button',
            { onClick: spoil },
            spoiler ? 'Hide' : 'Show',
            ' details'
        ),
        spoiler && React.createElement(
            'p',
            null,
            'Here are some spoil'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
