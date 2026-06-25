//never used
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number:", (input) => {
    num = Number(num);
    if (num % 2 === 0) {
        console.log(num + "is a even number");
    } else {
        console.log(num + "is a odd number");
    }
    r1.close();
});