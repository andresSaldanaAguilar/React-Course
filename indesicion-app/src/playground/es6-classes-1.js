class Person {
    constructor (name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    //special syntax for strings with vars 
    getDescription() {
        return `${this.name} is ${this.age}.`; 
    }

    getGreeting() {
        return `Hi Im ${this.name} and Im ${this.age}.`; 
    }
}

class Student extends Person {
    constructor (name , age, major){
        //this sets up the parent attributes, even the default values
        super(name,age);
        this.major = major;
    }
    
    // --> undefined=false , -->''=true
    hasMajor(){
        return !!this.major;
    }

    //overwrite parent method
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` his/her mayor is: ${this.major}`;
        }
        return description; 
    }
}

class Traveler extends Person {
    constructor (name, age, homelocation){
        super(name,age);
        this.homelocation = homelocation;
    }

    hasHomeLocation(){
        return !!this.homelocation;
    }
    
    //overwritting
    getGreeting() {
        let description = super.getGreeting();
        if(this.hasHomeLocation()){
            description += ` Im visiting from ${this.homelocation}`;
        }
        return description;
    }
}

const me = new Traveler('Andrew',21,'Mexico City');

console.log(me);
console.log(me.getGreeting());
