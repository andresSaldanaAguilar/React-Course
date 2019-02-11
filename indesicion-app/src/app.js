class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.onMakeDesicion = this.onMakeDesicion.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        };
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: [] 
            };
        });
    }

    onMakeDesicion (){
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Error: Enter some value to submit';
        }
        else if(this.state.options.includes(option)){
            return 'Error: Duplicate entry';
        }
        this.setState((prevState) => {
            //but we don't want to manipulate the old array
            //prevState.options.push(option); 
            return {
                //concat merges two arrays
                options: prevState.options.concat(option)
            };
        });
    }

    render(){
        const title = 'Indesicion App';
        const subtitle = 'Put your desicions on hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    onMakeDesicion={this.onMakeDesicion}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

//stateless component
const Action =(props) => {
    return (
        <div>
            <button 
                onClick={props.onMakeDesicion}
                disabled={!props.hasOptions}
            >
            What Should I do?
            </button>
        </div>
    );
};

/*
class Action extends React.Component {
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.onMakeDesicion}
                    disabled={!this.props.hasOptions}
                >
                What Should I do?
                </button>
            </div>
        );
    }
}
*/

const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.map((option) =>  <Option key={option} optionText={option}/>)}
            </div>
        );
}

class AddOption extends React.Component {
    //we need the constructor because we're using this inside the method
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    //we keep this on addOption because we don't want it to be on parent component
    handleAddOption(e){
        e.preventDefault();
        //trim prevents the page submit on only empty spaces
        const option = e.target.elements.option.value.trim();
        const retval = this.props.handleAddOption(option);
        this.setState(()=>{
            return {
                error: retval
            };
        });
    }
    render(){
        return (
            <div>
                {this.state.error && <b>{this.state.error}</b>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
        return (
            <div>
                Option: {props.optionText}
            </div>
        );
} 

ReactDOM.render(<IndesicionApp />,document.getElementById('app'));