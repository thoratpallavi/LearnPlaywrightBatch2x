//let does not allow redeclaration

let a = 10;
let a = 20;
console.log(a); //error - Identifier 'a' has already been declared

// let allow reassignment

let count = 0;
count = count + 1;

console.log(count); //1

// it is a block scope

if (true) {
    let name = "pallavi";
    console.log(name);  //pallavi    
}
console.log(name);   //error becoze name exists only inside the block

for (let i = 0; i < 3; i++) {
    console.log(i);  // 0, 1, 2
}
console.log(i);  //error becoze i exists only inside the block

function test() {
    if{ true}{
        let b = 1;
        console.log(b);  // 1
    }
    console.log(b); //error becoze b exists only inside the block
}

// initialization not mandatory

let i;
i = 1;
console.log(i);

let x = 5;
function test() {
    let x = 10; // redeclaration not allowed
    console.log(x); //block scop
}
test();
console.log(x); //considered the global variable