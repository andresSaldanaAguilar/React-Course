'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndesicionApp = function (_React$Component) {
    _inherits(IndesicionApp, _React$Component);

    function IndesicionApp(props) {
        _classCallCheck(this, IndesicionApp);

        var _this = _possibleConstructorReturn(this, (IndesicionApp.__proto__ || Object.getPrototypeOf(IndesicionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.onMakeDesicion = _this.onMakeDesicion.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndesicionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            /*this.setState(() => {
                return {
                    options: [] 
                };
            });*/

            //shorthand syntax
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            console.log("hdo");
        }
    }, {
        key: 'onMakeDesicion',
        value: function onMakeDesicion() {
            var randNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Error: Enter some value to submit';
            } else if (this.state.options.includes(option)) {
                return 'Error: Duplicate entry';
            }
            this.setState(function (prevState) {
                return {
                    //but we don't want to manipulate the old array
                    //prevState.options.push(option); 
                    //concat merges two arrays
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your desicions on hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    onMakeDesicion: this.onMakeDesicion
                }),
                React.createElement(Options, {
                    handleDeleteOption: this.handleAddOption,
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndesicionApp;
}(React.Component);

IndesicionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

//This allows to have some default values for components when an attribute is undefined
Header.defaultProps = {
    title: 'Indesicion App'
};

//stateless component
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.onMakeDesicion,
                disabled: !props.hasOptions
            },
            'What Should I do?'
        )
    );
};

/* Action Based Component
class Action extends React.Component {
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.onMakeDesicion}
                    disabled={!this.props.hasOptions}
                >
                What Should I do?
                </button>
            </div>
        );
    }
}
*/

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleAddOption
            });
        })
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    //we need the constructor because we're using this inside the method
    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }
    //we keep this on addOption because we don't want it to be on parent component


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            //trim prevents the page submit on only empty spaces
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'b',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOption(props.optionText) },
            'Remove'
        )
    );
};

//here we set the value for de app
ReactDOM.render(React.createElement(IndesicionApp, { options: ['Second Street', 'Times Square'] }), document.getElementById('app'));
