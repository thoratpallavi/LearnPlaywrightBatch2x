let pallu_age = 18;
let pallu_will_goa = pallu_age > 18 ? "pallu will go goa" : "No Goa"; //No Goa

let actualStatusCode = 200;
let expectedStatusCode = 200;
let result = actualStatusCode === expectedStatusCode ? "pass" : "Fail"; //pass

let isCI = true;
let browserMode = isCI ? "headless" : "headed"; //headless


//Nested ternary operator -multiple conditions
let age = 26;
let akshu_will_goa = age > 26 ? "akshu_age will go goa" : "No Goa";

let akshu_will_drink = age > 18 ? (age > 26 ? "Drnk" : "No Drink") : "No Goa";

let statusCode = 404;
let category = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "server Error"; //client error

let a = 20;
let b = 20;
let max = a > b ? a :
    a === b ? "both are same" : b;

let x = 10;
let y = 20;
let z = 30

let maxmimum = x > y ? ? ((x > z) ? x : z)
    : ((y > z) ? y : z);


// Print values so Node shows output
console.log('pallu_will_goa =>', pallu_will_goa);
console.log('result =>', result);
console.log('browserMode =>', browserMode);
console.log('akshu_will_goa =>', akshu_will_goa);
console.log('akshu_will_drink =>', akshu_will_drink);
console.log('category =>', category);
console.log('max =>', max);