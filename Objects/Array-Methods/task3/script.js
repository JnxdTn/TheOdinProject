// --------------------- Task #3 --------------------
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
// and removes from it all values except those that are between a and b.
// The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

let arr = [5, 3, 8, 1];

const filterRangeInPlace = (array=[], a, b)=> {
    for (let count = 0; count < array.length; count++) {
        let value = array[count];
        if(value < a || value > b){
            array.splice(count, 1);
        }
    }
}
filterRangeInPlace(arr, 1, 4)
console.log(arr);


