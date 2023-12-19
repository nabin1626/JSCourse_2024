const array1 = [2,3,4,5]
const array2 = [6, 7, 8 ,9]
// let newArray = array1.concat(array2)
let arr = [...array1 , ...array2]
console.log(arr);

console.log(Array.from("nabin sunar"));
let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1,s2,s3));