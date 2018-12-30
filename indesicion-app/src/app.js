console.log("app.js is currently running");

//JSX
var header = {
    title: "Indesicion App",
    subtitle: "Testing some JSX features"
};

var array = ["one","two","three"];

var template = (
    <div>
        <h1>{header.title}</h1>   
        <p>{header.subtitle}</p>
    </div>
);

var userName = "Andrés Saldana";
var userAge = 21;
var userLocation = "Mexico City";

var user = {
    name: "Andres Saldana",
    age: 21,
    location: "Mexico City"
};

function getLocation(location){
    if(location){
        return <p>location</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>   
        <p>Age: {user.age}</p>
        {getLocation(location)}
    </div>
);

var appRoot = document.getElementById('app');
//what to render, where to render 
ReactDOM.render(templateTwo,appRoot);