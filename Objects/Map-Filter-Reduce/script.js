// --------------------- MAP METHOD ---------------------
// Map method uses a callback(a function that uses another function as an argument) 
// function to iterate through the elements of an array
// map returns a new array and does not overwrite the original array
const number = [1, 2, 3, 4, 5];

const addOne = (num) => {
    return num + 1
}

console.log(number.map(addOne));

// cleaner implementation
console.log(number.map((num) => num + 1))


// --------------------- FILTER METHOD ---------------------
// Similar with Map, it iterates through the elements in an array using callback function
// the difference is it doesnt transform the values of the array but returns the original 
// values if it returns true. 

const isOdd = (num) =>{
    return num % 2 !== 0; 
}

const oddNumbers = number.filter(isOdd);
console.log(oddNumbers)
console.log(number.filter(num => num % 2 !== 0))


// --------------------- REDUCE METHOD ---------------------
// the reduce method takes two argument, the "accumulator" and the "initial value"
// the accumulator is the current value of the result at that point of the loop.
// The first loop of the accumulator, its value will be set to the initial value
// or the first element in the array if no initial value is set. 
// The second argmuent (after the callback) in the reducer method is the "initial value"
// which is the current item that is being iterated on.

const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
// with an initial value
const productOfAllNums = arrayOfNumbers.reduce((total, currentItem)=>{
    return total * currentItem
}, initialValue = 10);

console.log(arrayOfNumbers); // 1,2,3,4,5,6,7,8,9,10
console.log(productOfAllNums); //36288000
// arrayOfNumber.reduce with initial value = 10 * 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = 36288000
// arrayOfNumber.reduce without initial value = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 =   3628800 

