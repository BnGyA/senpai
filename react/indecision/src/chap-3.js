console.log('App.js is running! ');
const appRoot = document.getElementById('app');

// JSX - Javascript XML

const app = {
    title: 'Indecision app',
    subtitle: 'This is JSX from app.js',
    options: []
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


// Remove all button

const resetForm = () => {
    app.options = [];
    render();
};

// Make decision

const makeDecision = () => {
    let answer = app.options[Math.floor(Math.random() * app.options.length)];
    alert(answer);
    render();
};

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {/*<p>{app.options.length > 0 ?  'Here are your options : '+ app.options : 'No options'}</p>*/}
            <ul>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name='option' />
                <button>Add option</button>
            </form>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I do ?</button>
            <button onClick={resetForm}>Reset</button>
        </div>
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

