// Objects can also have functions as properties 
let person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
    },
    selfIntroduction() {
        console.log(`Hello, My Name is ${this.name[0]}.`)
    },
}

person.bio();
person.selfIntroduction();


// ------------------- Objects as object properties --------------------
// An Object property can itself be an object. 

let newPerson = {
    name: {
        first: "Merry Joy",
        last: "Bautista",
    },
    age: 23,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
    },
    selfIntroduction() {
        console.log(`Hello, My Name is ${this.name[0]}.`)
    },
}

console.log(newPerson.name.first); // Dot Notation
console.log(newPerson["name"]["last"]) // Bracket Notation

const myDataName = "height";
const myDataValue = "1.75m";

newPerson[myDataName] = myDataValue;
console.log(newPerson.height)


// ------------------- What is "This" --------------------
// this keyword pertains to the current object the code is being written inside. 
const person1 = {
    name: "Merry Joy",
    bio() {
        console.log(`Hi, I am ${this.name}.`);
    },
}

const person2 = {
    name: "Janxed",
    bio() {
        console.log(`Hi, I am ${this.name}.`);
    },
}

console.log(person1.bio());
console.log(person2.bio());


// ------------------- Introducing Constructors --------------------

// first version is just a function 
function createPerson(name){
    let obj = {};
    obj.name = name;
    obj.selfIntroduction = function(){
        console.log(`Hello! My name is ${obj.name}.`);
    };
    return obj;
}

const Janxed = createPerson("Janxed");
Janxed.selfIntroduction();

const MJ = createPerson("MJ");
MJ.selfIntroduction();

// second version is a constructor; By convention, constructors start with a CAPITAL letter and are named for the type of object they create 
function Person(name){
    this.name = name;
    this.selfIntroduction = function(){
        console.log(`Hello! My name is ${this.name}.`);
    }
}

// Call a constructor by appending "new" before the Constructor

const newJanxed = new Person("Janxed");
newJanxed.selfIntroduction();

const newMJ = new Person("MJ");
newMJ.selfIntroduction();


// class Person with a constructor 
class Person1 {
    constructor(name) {
        this.name = name;
        this.selfIntroduction = function () {
            console.log(`Hello! My name is ${this.name}.`);
        };
    }
}


const guy = new Person1("Joko");
const lady = new Person1("Leigh")
console.log(guy.name)
console.log(lady.name)







































