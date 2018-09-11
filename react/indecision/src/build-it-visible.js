/*const appRoot = document.getElementById('app');

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
          //{<p>{spoiler ? 'Here are some details blahblah' : '' }</p>}
          {spoiler && (
              <p>Here are some spoil</p>
          )}
      </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

*/



class Spoil extends React.Component{

    constructor(props){
        super(props);
        this.spoil = this.spoil.bind(this);
        this.state = {
            spoiler: false
        }
    }

    spoil(){
        this.setState((prevState) =>{
           return{
               spoiler: !prevState.spoiler
           }
        });
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>Build it visible</h1>
                <button onClick={this.spoil}>{this.state.spoiler ? 'Hide' : 'Show'}</button>
                {this.state.spoiler && (
                    <p>Here are some spoil</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Spoil />, document.getElementById('app'));