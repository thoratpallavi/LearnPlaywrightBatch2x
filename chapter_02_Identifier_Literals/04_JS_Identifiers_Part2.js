//camel case identifiers
//Yes, standard for variables and functions in JavaScript
var firstName = 'Alice';
var lastName = 'Smith';
var fullName = firstName + ' ' + lastName;

//pascal case identifiers
//Yes, often used for class names and constructor functions in JavaScript
var FirstName = 'Bob';
var LastName = 'Johnson';
var FullName = FirstName + ' ' + LastName;

//snake case identifiers
//Yes, valid in JavaScript but less common for variables and functions (more common in other languages) 
var first_name = 'Charlie';
var last_name = 'Brown';
var full_name = first_name + ' ' + last_name;

//SCREAMING_SNAKE_CASE identifiers (often used for constants)
// Yes, valid in JavaScript and commonly used for constants
const MAX_USERS = 100;
const API_KEY = '12345-ABCDE';

// kebab-case identifiers (not valid in JavaScript, shown here for comparison)
// No, this would cause a SyntaxError because hyphens are not allowed in JavaScript identifiers
// var first-name = 'David'; // This would cause a SyntaxError
// var last-name = 'Wilson'; // This would cause a SyntaxError
// var full-name = first-name + ' ' + last-name; // This would cause a SyntaxError      

//Hungarian notation (not commonly used in modern JavaScript, but shown here for historical context)
//Yes,older style,avoided in modern style
var strFirstName = 'Eve';
var strLastName = 'Davis';
var strFullName = strFirstName + ' ' + strLastName;

//Train case identifiers (not commonly used in JavaScript, but shown here for comparison)
//No,Used in HTML/CSS, not valid in JavaScript
// var First-Name = 'Frank'; // This would cause a SyntaxError
// var Last-Name = 'Miller'; // This would cause a SyntaxError
// var Full-Name = First-Name + ' ' + Last-Name; // This would cause a SyntaxError

