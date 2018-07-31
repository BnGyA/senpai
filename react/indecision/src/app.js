console.log('App.js is running! ');


// JSX - Javascript XML

var template = (
    <div>
        <h1>Indecision app</h1>
        <p>This is JSX from app.js</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);