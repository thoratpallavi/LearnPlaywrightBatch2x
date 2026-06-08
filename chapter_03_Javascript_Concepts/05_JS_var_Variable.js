//Keyword,Identifier,literal
//variable create using var,let,const
//var

var v = 10; //variable initialization
console.log(v); //variable usage

var v = 20;
console.log(v); //variable usage value is updated
////////////////////////////////////////////////////////////////
var browser = "chrome";
var browser = "firefox"; //redeclarartion allowed in var
browser = "edge"; //reassignment allowed in var

var testcases = ["login", "logout", "search"];
for (var i = 0; i < testcases.length; i++) {
    console.log(testcases[i]);
}

console.log(i); //i is accessible outside the loop because of var scope
//  is function scope

/////////////////////////////////////////////////////////////////////
//Var is function scoped, so it is accessible outside the loop, block

var x = 5;
function test() {
    var x = 10; // this x is different from the global x
    console.log(x); // preference to local variable x, output will be 10
}
test();
console.log(x); // output will be 5, global x is not affected by the function's local x

///////////////////////////////////////////////
function test2() {
    var a = 20;
    console.log(a); // output will be 20
    if (true) {
        var a = 30; // this a is the same as the one declared in the 
        // function scope, it will overwrite the previous value
        console.log(a); // output will be 30
    }
    console.log(a); // output will be 30, because var is function scoped,
    //  the value of a is updated in the entire function scope
}
test2();
console.log(a); // ReferenceError: a is not defined, because a is not 
// accessible outside the function scope

//////////////////////////////////////////////////
function test3() {
    for (var i = 0; i < 3; i++) {
        console.log(i); //output-0,1,2
    }
    console.log(i); // i is accessible here and will output 3, 
    // which is the value of i after the loop ends
}
test3();

// initialization not mandatory

let i;
i = 1;
console.log(i);