// --------------------- Task #12 --------------------
// Create keyed object from array 
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

// const groupById = (obj)=>{
//   let newObj = {};
//   for(element of obj){
//     newObj[element.id] = element
//   }
//   return newObj;
// }

const groupById = (arr)=>{
  return arr.reduce((obj, value)=>{
    obj[value.id] = value; // first value -->   john: {id: 'john', name: "John Smith", age: 20}
    return obj; 
  }, {}) // the initial value provided is an empty obj
}

let usersById = console.log(groupById(users));