console.log(null >= 0);  //true
console.log(null === 0);  //false

//?? - nullish operator

let a = null;
let b = a ?? "c";
console.log(b);
//if a is null then it replace with the c;

let x = 1;
let y = x ?? "z"
console.log(x);
//if x is not null then it dosen't replace with the z;

