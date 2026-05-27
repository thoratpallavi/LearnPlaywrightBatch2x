console.log("Hello, World!");

let x = 10;
console.log(x); //does not need optimization


for(let a=10; a<10000; a++){
    console.log(a); //needs optimization
    print();
}

function print(){
    console.log("This is a print function");
}
//to check bytecode: node --print-bytecode chapter_01_Basics/01_Basics.js