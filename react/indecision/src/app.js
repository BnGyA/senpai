class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
          options: []
        };
    }

    handleDeleteOptions(){
        this.setState(() =>{
           return{
               options: []
           }
        });
    }

    //let answer = app.options[Math.floor(Math.random() * app.options.length)];
    handlePick(){
        let answer = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(answer);
    }

    handleAddOption(option){


        if(!option){
            return 'Enter a valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>{
            //options: prevState.options.push(this.props.option) -> not correct because we are manipulating the prevState and we don't want to do such a thing
           return{
               options: prevState.options.concat(option)
           }
        });
    }

    render() {

        let title = 'IndecisionApp';
        let subtitle = 'Put your life decision to a computer';

        return (

            <div>
                <Header title={title} subtitle={subtitle}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption} />
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render(){
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do ?</button>
            </div>
        )
    }
}


class Options extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ul>
                <button onClick={this.props.handleDeleteOptions}>Remove all options</button>
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



class AddOption extends React.Component{
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
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option' />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));