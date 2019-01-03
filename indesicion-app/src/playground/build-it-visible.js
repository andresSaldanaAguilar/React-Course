let showBan = 'none';

const onClickVisibility = () => {
    showBan = !showBan;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    //we are jusst referencing to the function, not calling it
    const template = (
        <div>
            <h1>Visibility Toggle</h1>   
            <button onClick={onClickVisibility}>{showBan ? 'Hide Details' : 'Show Details'}</button>
            {showBan && (
                <p>Hey. These are some details youn can see now!</p>
            )}
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render();

