
//Preincrement - increase the value by 1 and assign

let a = 10;
let b = ++a;
console.log(b);  //11
console.log(a);  //11

//Postincrement - first assign and then increase the value by 1

let a = 10;
let b = a++;
console.log(b);  //10
console.log(a);  //11

let a = 10;
console.log(++a + a); //22
console.log(a);   //11

let a = 10;
console.log(a++ + ++a); //22
console.log(a);   //12

let a = 10;
console.log(++a + ++a); //23
console.log(a);   //12 

let a = 5
console.log(a++ + ++a - --a + a-- + ++a); //23
console.log(a);   //12

//Predecrement - decrease the value by 1 and assign

let a = 10;
let b = --a;
console.log(b);  //9
console.log(a);  //9

//Postdecrement - first assign and then decrease the value by 1

let a = 10;
let b = a--;
console.log(b);  //10
console.log(a);  //9 