// var hoisting

console.log(a); //undefined -JS engine initially variable is created 
// and set a value as undefined or initialize with undefined

var a = 10;
console.log(a); //10

//let hoisting 

//TDZ starts
console.log(b); //Reference error we can not access the variable until the declaration
let b = 10;
//TDZ ends
console.log(b); //10

//const hoisting

console.log(c); //Reference error we can not access the variable until the declaration
const c = 10;
//TDZ ends
console.log(c); //10