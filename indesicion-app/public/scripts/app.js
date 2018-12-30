"use strict";

console.log("app.js is currently running");

//JSX
var header = {
    title: "Indesicion App",
    subtitle: "Testing some JSX features"
};

var array = ["one", "two", "three"];

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        header.title
    ),
    React.createElement(
        "p",
        null,
        header.subtitle
    )
);

var userName = "Andrés Saldana";
var userAge = 21;
var userLocation = "Mexico City";

var user = {
    name: "Andres Saldana",
    age: 21,
    location: "Mexico City"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "location"
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(location)
);

var appRoot = document.getElementById('app');
//what to render, where to render 
ReactDOM.render(templateTwo, appRoot);
