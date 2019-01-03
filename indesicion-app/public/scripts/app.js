'use strict';

var showBan = 'none';

var onClickVisibility = function onClickVisibility() {
    showBan = !showBan;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    //we are jusst referencing to the function, not calling it
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClickVisibility },
            showBan ? 'Hide Details' : 'Show Details'
        ),
        showBan && React.createElement(
            'p',
            null,
            'Hey. These are some details youn can see now!'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
