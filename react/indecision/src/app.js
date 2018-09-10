class IndecisionApp extends React.Component {
    render() {

        let title = 'IndecisionApp';
        let subtitle = 'Put your life decision to a computer';
        let options = ['Option 1', 'Option 2', 'Option 3'];

        return (

            <div>
                <Header title={title} subtitle={subtitle}/>
                <Options options={options}/>
                <AddOption />
                <Action />
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
    handlePick(){
        alert('something');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do ?</button>
            </div>
        )
    }
}


class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options)
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ul>
                <button onClick={this.handleRemoveAll}>Remove all options</button>
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
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option){
            console.log(this.props.option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option' />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));