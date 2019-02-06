'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        //we're defining like on the classes doc the attributes
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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
