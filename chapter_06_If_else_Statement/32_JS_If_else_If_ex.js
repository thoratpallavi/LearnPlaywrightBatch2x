let status = 400
if (status >= 200 && status <= 299) {
    console.log("Success");
} else if (status >= 300 && status <= 399) {
    console.log("Redirection");
} else if (status >= 400 && status <= 499) {
    console.log("Client error");
} else if (status >= 500 && status <= 599) {
    console.log("Server error");
} else {
    console.log("Invalid");
}

//2
let expected = "Login successful";
let actual = "Invalid Credentials";

if (expected === actual) {
    console.log("test case passed");
} else {
    console.log("test failed - Expected + : Login successful, Got: " + actual);
}

//3

let severity = 8
if (severity === 9 || severity === 10) {
    console.log("Critical");
} else if (severity === 7 || severity === 8) {
    console.log("High");
} else if (severity >= 4 && severity <= 6) {
    console.log("Medium");
} else if (severity >= 1 && severity <= 3) {
    console.log("Low");
} else {
    console.log("Invalid Score");
}

//4
let attempts = 2;
if (attempts === 2) {
    console.log("1 attempt left before lockout");
} else if (attempts === 3) {
    console.log("account locked - contact support");
} if (attempts === 0) {
    console.log("login successful");
} 