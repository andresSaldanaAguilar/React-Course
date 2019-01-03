"use strict";

console.log("app.js is currently running");

//JSX
var app = {
    title: "Indesicion App",
    subtitle: "Testing some JSX features",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        //avoiding duplicates
        if (!app.options.includes(option)) {
            app.options.push(option);
            e.target.elements.option.value = '';
            render();
        }
    }
};

var onRemoveClick = function onRemoveClick() {
    app.options = [];
    render();
};

var onMakeDesicion = function onMakeDesicion() {
    var randNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
    //we are jusst referencing to the function, not calling it
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDesicion },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveClick },
            "Remove All"
        ),
        app.options.length > 0 ? React.createElement(
            "p",
            null,
            "Here are your options:"
        ) : React.createElement(
            "p",
            null,
            "No options"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
