class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.onMakeDesicion = this.onMakeDesicion.bind(this);
        this.state = {
            options : ['thing1','thing2']
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
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

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

class Options extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((option) =>  <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleOnSubmit(e){
        e.preventDefault();
        //trim prevents the page submit on only empty spaces
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
} 

ReactDOM.render(<IndesicionApp />,document.getElementById('app'));