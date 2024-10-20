const cat2 = {
    name: "Pussy",
    breed: "British Shorthair",
    color: "White",
    greeting: function () {
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    },
};

function Cat(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function(){
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    } 
}

const Cake = new Cat("Cake", "Siamese", "Black");
Cake.greeting();