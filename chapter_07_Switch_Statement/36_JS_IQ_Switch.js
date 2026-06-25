//ans-100 becoz first case will execute and break the statement
let a = 10;
switch (a) {
    case 10:
        let b = 100;
        console.log(b);
        break;

    case 10:
        let c = 200;
        console.log(c);
        break;
    default:
        console.log("d");
}

//Ans- 0 matched becoz switch use strict comparison(===)
let status = 0;
switch (status) {
    case false:
        console.log("false matched");
        break;

    case 0:
        console.log("0 matched");
        break;
}