class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.onMakeDesicion = this.onMakeDesicion.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options
        };
    }

    handleDeleteOptions(){
        /*this.setState(() => {
            return {
                options: [] 
            };
        });*/

        //shorthand syntax
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option){
        console.log("hdo");
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
        this.setState((prevState) => ({
            //but we don't want to manipulate the old array
            //prevState.options.push(option); 
                //concat merges two arrays
                options: prevState.options.concat(option)
        }));
    }

    render(){
        const subtitle = 'Put your desicions on hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    onMakeDesicion={this.onMakeDesicion}
                />
                <Options 
                    handleDeleteOption={this.handleAddOption}
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

IndesicionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

//This allows to have some default values for components when an attribute is undefined
Header.defaultProps = {
    title: 'Indesicion App'
};

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

/* Action Based Component
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
                {props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleAddOption}
                    />
                ))}
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
        const error = this.props.handleAddOption(option);
        this.setState(()=> ({ error }));
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
                {props.optionText}
                <button onClick={props.handleDeleteOption(props.optionText)}>Remove</button>
            </div>
        );
} 

//here we set the value for de app
ReactDOM.render(<IndesicionApp options = {['Second Street','Times Square']}/>,document.getElementById('app'));