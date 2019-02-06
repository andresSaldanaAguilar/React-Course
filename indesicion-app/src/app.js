class IndesicionApp extends React.Component {
    render(){
        const title = 'Indesicion App';
        const subtitle = 'Put your desicions on hands of a computer';
        const options = ['thing1','thing2'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
    handlePick(){
        alert('button clicked');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
       console.log(this.props.options);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option) =>  <Option key={option} option={option}/>)}
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
                {this.props.option}
            </div>
        );
    }
}

ReactDOM.render(<IndesicionApp />,document.getElementById('app'));