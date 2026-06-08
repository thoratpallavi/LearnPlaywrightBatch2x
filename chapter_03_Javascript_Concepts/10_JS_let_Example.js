var a = 10; //global scope
console.log(a); //10


function test() {
    console.log("Hello");
    let a = 20;
    console.log(a);  //20
    if (true) {
        let a = 30;
        console.log(a);  //30
    }
    console.log("F ->", a); //20
}
console.log("G ->", a); // 10

test();
