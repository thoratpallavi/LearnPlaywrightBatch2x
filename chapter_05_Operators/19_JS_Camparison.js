console.log(3 > 4); //false
console.log(3 < 4); //true
console.log(4 >= 4); //true
console.log(3 <= 4);  //true

// === strict comparison
//== loose comparison-check both value and ty

//always use ===
//use == only for null and undefined

//number == string
console.log(42 == "42"); //true = loose comparison 
console.log(42 === "42"); //false = strict comparison

console.log(5 === 5);  //true
console.log(5 === "5");  //false

console.log(0 == "");  //true
console.log(0 === "");  //false

console.log(true == 1);  //true
console.log(false == 0);  //true
console.log(true == "1");  //true
console.log(true == 2);  //false

console.log("" == "0");  //false-transitivity broken-becoz both are the 
//string and thoes 2 strings are not same

console.log(0 == false);  //true
console.log(null == 0); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(5 != "5"); //false
console.log(5 !== "5"); //true



