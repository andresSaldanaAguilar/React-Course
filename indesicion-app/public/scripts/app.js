'use strict';

var square = function square(x) {
    return x * x;
};
console.log(square(4));

/*const squareArrow = (x) => {
    return x*x;
};*/

//the same of above, just valid when is just one line
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(6));

function getFisrtName(name) {
    return name.split(' ')[0];
}

var getFisrtNameArrow = function getFisrtNameArrow(name) {
    return name.split(' ')[0];
};

console.log(getFisrtNameArrow('Andres Saldana'));
