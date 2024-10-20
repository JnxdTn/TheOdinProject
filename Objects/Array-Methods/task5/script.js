// --------------------- Task #5 --------------------
// copy and sort array
let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (array)=>{
    return array.slice().sort(); 
    // slice will return a shallow copy of the array and then sort the new array
}

let sorted = copySorted(arr);
console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)

