let username = "dev";
let password = "123";
let isAccountLocked = false;

if ((username === "dev" && password === "123") && isAccountLocked) {
    console.log("Allowed to enter!");
} else
    console.log("Not Allowed to enter!");

let num = 7;
if (num % 2 === 0) {
    console.log(num + "is a even number");
} else {
    console.log(num + "is a odd number");
}

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap year");
} else {
    console.log(year + " is not a Leap year");
}
