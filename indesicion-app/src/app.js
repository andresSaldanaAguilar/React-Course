console.log("app.js is currently running");

//JSX
const app = {
    title: "Indesicion App",
    subtitle: "Testing some JSX features",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        //avoiding duplicates
        if(!app.options.includes(option)){
            app.options.push(option);
            e.target.elements.option.value = '';
            render();
        }
    }
};

const onRemoveClick = () => {
    app.options = [];
    render();
};

const onMakeDesicion = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    //we are jusst referencing to the function, not calling it
    const template = (
        <div>
            <h1>{app.title}</h1>   
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length}</p>
            <button disabled = {app.options.length === 0} onClick={onMakeDesicion}>What should I do?</button>
            <button onClick={onRemoveClick}>Remove All</button>
            {app.options.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}
            <ol>
                {
                    app.options.map((option) =>{
                        return <li key={option}>{option}</li>
                    })   
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render();