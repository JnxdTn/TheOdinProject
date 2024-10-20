const cat = {
    name: "Bertie",
    breed: "Cymric",
    color: "white",
    greeting: function () {
        console.log("Meow");
    },
};

cat.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
};

const cat2 = {
    name: "Pussy",
    breed: "British Shorthair",
    color: "White",
    greeting: function () {
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    },
};

cat.greeting();
cat2.greeting();