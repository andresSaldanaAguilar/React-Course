const square = function(x){
    return x * x ;
};
console.log(square(4));

/*const squareArrow = (x) => {
    return x*x;
};*/

//the same of above, just valid when is just one line
const squareArrow = (x) => x*x;

console.log(squareArrow(6));


function getFisrtName(name){
    return name.split(' ')[0];
}

const getFisrtNameArrow = (name) => name.split(' ')[0];

console.log(getFisrtNameArrow('Andres Saldana'));