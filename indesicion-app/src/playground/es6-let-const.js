var name = "Andrew";
//js allows duplicates
var name = "Saldana";
console.log('Name',name);

//let does´nt allow duplicates but redefining
let nameLet = "Andrew";
name = "Andres"
console.log(nameLet);

//const is just a constant.
const nameConst = "Andrew"
console.log(nameConst);

function getPetName(){
    var petName = "Hal"
    return petName;
}

//but we cannot access to petName directly
console.log(getPetName());

// let and const have the characteristic of not existing outside the block scope