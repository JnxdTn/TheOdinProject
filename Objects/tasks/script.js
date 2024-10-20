// Objects Tasks #1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Objects Tasks #2 
function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

// Objects Tasks #3
let salaries = {
    John: 100,
    Anne: 160,
    Pete: 130,
}

function sumSalaries(obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop]
    }
    return console.log(sum);
}

sumSalaries(salaries);
sumSalaries();

// Objects Tasks #4
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof (obj[prop]) === "number") {
            obj[prop] = obj[prop] * 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu)
