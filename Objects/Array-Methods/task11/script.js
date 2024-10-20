// --------------------- Task #11 --------------------
// Filter Unique Array Members

function unique(arr) {
  let result = [];

  for(element of arr){
    if(!result.includes(element)){
      result.push(element)
    }
  }
  return result;
}


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O