
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //we're defining like on the classes doc the attributes
        this.state = {
            count: 0
        };
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
    }
    handleReset(){
        this.setState(()=>{
            return {
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'));

// console.log("app.js is currently running");

// //JSX
// const header = {
//     title: "Indesicion App",
//     subtitle: "Testing some JSX features",
//     options: ["One","Two"]
// };

// const template = (
//     <div>
//         <h1>{header.title}</h1>   
//         {header.subtitle && <p>{header.subtitle}</p>}
//         {header.options && header.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
//     </div>
// );

// const user = {
//     name: "Andres Saldana",
//     age: 18,
//     location: "Mexico City"
// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// //but class is not supported on JSX because is an JS element, so we use classname
// let count = 0;
// const myid = 'myidhere';
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={myid} className="btn btn-secondary" onClick={addOne}>+1</button>
//             <button className="btn btn-secondary" onClick={minusOne}>-1</button>
//             <button className="btn btn-secondary" onClick={reset}>reset</button>
//         </div>
//     );

//     //what to render, where to render, this methos only re-renders things that changed, not all the document,
//     //using virtual dom algorithms
//     ReactDOM.render(templateTwo,appRoot);
// }

// //first render, then we re-render n times.s
// renderCounterApp();