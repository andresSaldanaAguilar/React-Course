console.log("app.js is currently running");

//JSX
const header = {
    title: "Indesicion App",
    subtitle: "Testing some JSX features",
    options: ["One","Two"]
};

const template = (
    <div>
        <h1>{header.title}</h1>   
        {header.subtitle && <p>{header.subtitle}</p>}
        {header.options && header.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
    </div>
);

const user = {
    name: "Andres Saldana",
    age: 18,
    location: "Mexico City"
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>   
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
//what to render, where to render 
ReactDOM.render(template,appRoot);