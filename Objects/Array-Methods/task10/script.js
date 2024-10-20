// --------------------- Task #10 --------------------
// Get Average Age

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = (users)=>{
    let initialValue = 0;
    return users.reduce((firstValue, nextValue)=>{
        return firstValue + nextValue.age
    }, initialValue) / users.length
}

// to sum up an array of objects with reduce, we need to provide an initialValue
// so that each item passes through our function

// if we dont provide an initialvalue of 0, the inital value passed is the object 
// john. an object plus integer just concatenates the integer to the object 
// which then makes it a string. a string added to an integer is NaN. 

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28