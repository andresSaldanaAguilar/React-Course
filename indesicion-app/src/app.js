class IndesicionApp extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <Option />
                <AddOption />
            </div>
        );
    }
}

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
                Component Options
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                Component Add Options
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                Component Option
            </div>
        );
    }
}

ReactDOM.render(<IndesicionApp />,document.getElementById('app'));