class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indesicion App</h1>
                <h2>Put your desicions on hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                <ol>
                    <li>Item one</li>
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);
ReactDOM.render(jsx,document.getElementById('app'));