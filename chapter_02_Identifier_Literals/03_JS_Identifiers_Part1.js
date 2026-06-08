//rules for JavaScript identifiers
// Examples of JavaScript identifiers — valid and invalid

// Valid identifiers (these are actual declarations you can run)
var $ = 10; // starts with $
var _var = 20; // starts with underscore
var a = 60; // starts with a letter
var a_b = 70; // contains underscore
var a$b = 80; // contains dollar sign
var a1 = 90; // letter followed by number(s)
var Ångström = 100; // Unicode letter is allowed
var π = 3.1415; // Greek letter
var emoji_smile = 'smile'; // use ASCII fallback (emoji may be invalid in some runtimes)

let firstName = 'Alice';
const MAX_COUNT = 100;

// Invalid identifiers (commented out — these would cause SyntaxError if uncommented)
// var 1a = 30;       // cannot start with a digit
// var a-b = 40;      // hyphen is interpreted as subtraction
// var a b = 50;      // spaces not allowed
// var "name" = 'x'; // quotes not allowed in identifiers
// let function = 100; // reserved keyword cannot be used as identifier
// var var = 1;       // reserved word
// var +abc = 2;      // plus sign not allowed

// Use the variables to show they work
console.log('Valid identifiers:', $, _var, a, a_b, a$b, a1, Ångström, π, emoji_smile);
console.log('Let/Const:', firstName, MAX_COUNT);






