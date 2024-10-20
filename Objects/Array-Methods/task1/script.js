// --------------------- Task #1 --------------------
// Tasks 1: Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words
// like "my-short-string" into camel-cased "myShortString".
// That is: removes all dashes, each word after dash becomes uppercased.

// my Solution
const camelize1 = (str) =>{
    const result = str.split("-").map(string=>{
        return string.replace(string[0], string[0].toUpperCase());    
    }).join("");

    return result.replace(result[0], result[0].toLowerCase());
}

// original solution 
const camelize2 = (str) => {
    return str.split("-").map((word, index) => {
        return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    }).join("");
}

console.log("----- My Solution -----")
console.log(camelize1("border-left-width"));
console.log(camelize1("my-short-string"));
console.log(camelize1("array-methods-task1"));
// console.log(camelize1("-webkit-transition")); // returns an error using my solution
console.log("\n")

console.log("----- Original Solution -----");
console.log(camelize2("border-left-width"));
console.log(camelize2("my-short-string"));
console.log(camelize2("array-methods-task1"));
console.log(camelize2("-webkit-transition")); // expected answer: WebkitTransition 


