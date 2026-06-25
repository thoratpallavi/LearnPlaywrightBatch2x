if ("hello") console.log("String is truthy");
if (10) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy");
if ([]) console.log("Empty array is truthy");

//false condition

if ("") console.log("Won't print");
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (Nan) console.log("Won't print");
if (0) console.log("Won't print");

let name = undefined;
if (name) {
    console.log("Hi");
} else {
    console.log("bye");
}//bye