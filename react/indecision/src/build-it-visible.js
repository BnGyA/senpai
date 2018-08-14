const appRoot = document.getElementById('app');

const app = {
    title: 'Build it visible'
};

let spoiler = false;

const spoil = () => {
    spoiler = !spoiler;
    console.log(spoiler);
    render();
};

const render = () => {

    const template = (
      <div>
          <h1>{app.title}</h1>
          <button onClick={spoil}>{spoiler ? 'Hide' : 'Show'} details</button>
          {/*<p>{spoiler ? 'Here are some details blahblah' : '' }</p>*/}
          {spoiler && (
              <p>Here are some spoil</p>
          )}
      </div>
    );

    ReactDOM.render(template, appRoot);
};

render();