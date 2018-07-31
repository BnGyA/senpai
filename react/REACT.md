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