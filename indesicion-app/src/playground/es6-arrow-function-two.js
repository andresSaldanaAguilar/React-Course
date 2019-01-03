
const add = function (a,b) {
    console.log(arguments);
    return a + b;
}
console.log(add(3,45));

//but arguments are not allowed on JSX

const user = {
    name: 'Andrew',
    cities: ['Philadelphia','New York','Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4],
    multiply(factor) {
        return this.numbers.map((number) => number*factor);
    }
};

console.log(multiplier.multiply(2));