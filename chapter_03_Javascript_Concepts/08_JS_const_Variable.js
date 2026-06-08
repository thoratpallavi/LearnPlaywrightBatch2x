const a = 10;
const a = 20;

console.log(a);//error redeclaration not allowed

a = 30;
console.log(a);//error reassignment not allowed 

//Must be initialized when declared
const x;
x = 10;
console.log(x);//error