let score = 78;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F- Fail");
}


let isLoggedIn = true;
let userRole = "editor";
if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all things");
    } else if (userRole === "editor") {
        console.log("Edit access granted");
    } else if (userRole === "viewer") {
        console.log("Read Only access granted");
    } else {
        console.log("No idea which role you are?");
    }
} else {
    console.log("you are not logged in");
}