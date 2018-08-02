console.log('App.js is running! ');
const appRoot = document.getElementById('app');

// JSX - Javascript XML

const app = {
    title: 'Indecision app',
    subtitle: 'This is JSX from app.js',
    options: ["One", "Two"]
};



const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ?  'Here are your options : '+ app.options : 'No options'}</p>

    </div>
);








// Profil page

const user = {
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
);

ReactDOM.render(template, appRoot);