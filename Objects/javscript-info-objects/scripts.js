// Two ways in creating an object 
let user = new Object(); // Object Constructor Syntax
let newUser = {}; // Object Literal Syntax

// -------------------- Literals and Properties -------------------- // 

user = {
    name: "Merry Joy",
    age: 23,
}

newUser = {
    name: "Janxed",
    age: 22,
}

console.log(`User.name: ${user.name}`) // Merry Joy
console.log(`NewUser.name: ${newUser.name}`) // Janxed

// add property to object 
user.isAdmin = true;
console.log(user)

// delete property in object
delete user.age;
console.log(user)

let newerUser = {
    name: "Jd",
    age: 17,
    "likes birds": true, // multiword property must be in quotes
}
console.log(newerUser)


// -------------------- Square Brackets -------------------- // 

// code below is an error; use square bracket to access the property "likes birds"
// newerUser.likes birds = false 

newerUser["likes birds"] = false;
console.log(newerUser)
delete newerUser["likes birds"];
console.log(newerUser)

let key = "likes birds";
newerUser[key] = true;
console.log(newerUser)

let key2 = prompt("What do you want to know about the User?", "name");

alert(newUser[key2]);
alert(`newUser.key2: ${newUser.key2}`); //undefined


// -------------------- Computer Properties -------------------- // 

let fruit = prompt("Which fruit would you like to buy?", "Mango");
let cart = {
    [fruit]: 5,
}

console.log(cart.Mango)

let newfruit = "apple";
let bag = {
    [newfruit + "Pay"]: 6,
}
console.log(bag.applePay)


// -------------------- Property Value Shorthand -------------------- // 

function makeUser(name, age) {
    return {
        name, //shorthand property for name: name
        age, //shorthand property for age: age
        // we can also use both normal properties and shorthand in the same object
        // name, 
        // age: 20
    }
}

let person = makeUser("MJ", 23);
console.log(person)


// -------------------- Property names limitation -------------------- // 

// there are no reserved words for properties; let, return, for as property keys can be used. 
let reservedVariables = {
    for: 1,
    let: 2,
    return: 3,
    const: 4,
    0: "word", // 0 becomes a string when used as a property key
}
console.log(reservedVariables.for + reservedVariables.let + reservedVariables.return + reservedVariables.const)

let obj = {};
obj.__proto__ = 5; // okay I lied, __proto__ is one special variable that cant be used
alert(obj.__proto__); // this will not return 5 but will return object [Object] 


// -------------------- Property existence test, "in" operator -------------------- // 

let one = {};

console.log(one.thiskeydoesntexist === undefined); // true

// theres a special "in" operator, to check for a property in an object
one["two"] = 3;
console.log("two" in one) // true, the left side of "in" is a property key
console.log("three" in one) //false
console.log(one);

// if we omit the quotes, the variable should contain the property key

let humanPerson = "person"; // humanPerson has the "person" property key
let human = {
    person: "hello",
}
console.log(humanPerson in human) // true 

// why deoes the "in" property exist? 
// for special cases when the property value is undefined 

let galaxy = {
    big: undefined,
}

console.log(galaxy.big) // returns undefined because the value of big === undefined
console.log("big" in galaxy) // returns true because the property "big" exists in galaxy 


// -------------------- The for "in" loop -------------------- // 

let phone = {
    samsung: 1,
    apple: 2,
    xiaomi: 3,
    oneplus: 4,
}

for (let prop in phone) {
    console.log(`${prop}: ${phone[prop]}`)
}


// -------------------- Ordered like an object -------------------- // 

// objects are ordered in a special fashon 
// integer properties are ordered by ascending order 
// while non-integer properties are ordered by their creation order 

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    console.log(code); // 1, 41, 44, 49; ordered by ascending order due to its integer property
}

// to fix this, add a "+" before the integer and convert into an integer instantiated in the loop 
let newCode = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA",
}

for (let code in newCode) {
    console.log(+code) // 49, 41, 44, 1; ordered by creation order due to being instantiated as a non-integer
}
















































