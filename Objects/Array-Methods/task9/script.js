// --------------------- Task #9 --------------------
// Shuffle an array
let arr = [1, 2, 3];

const shuffle = (array) => array.sort(()=> Math.random() - 0.5);

console.log(shuffle(arr));

// explanation here
// https://javascript.info/task/shuffle
