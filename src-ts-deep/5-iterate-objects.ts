//This code runs fine, and yet TypeScript flags an error in it. Why?
const obj = {
    one: 'uno',
    two: 'dos',
    three: 'tres',
};
for (const k in obj) {
    const v = obj[k];
    //const v = obj.k;
    console.log(v)
    // ~~~~~~ Element implicitly has an 'any' type
    // because type ... has no index signature
}

//fix - Using a type assertion to get a narrower type for k fixes the issue
for (const kStr in obj) {
    const k = kStr as keyof typeof obj;
    // ^? const k: "one" | "two" | "three"
    const v = obj[k]; // OK
    console.log(v)
}

//more deep
interface ABC {
    a: string;
    b: string;
    c: number;
}
function foo(abc: ABC) {
    for (const k in abc) {
        // ^? const k: string
        const v = abc[k];
        // ~~~~~~ Element implicitly has an 'any' type
        // because type 'ABC' has no index signature
        console.log(v)
    }
}

const x = { a: 'a', b: 'b', c: 2, d: new Date() };
foo(x); // OK

let myObject = {
    firstName: "John",
    lastName: "Doe",
    age: 140
}
let myObjectKeys = Object.keys(myObject)
//Once we have extracted an array, then it is Iterable
for (let item of myObjectKeys) {
    console.log(item) //firstName, lastName, age
}


let myObjectVals = Object.values(myObject)
for (let item of myObjectVals) {
    console.log(item) //John, Doe, 140
}


let myObjectEntries = Object.entries(myObject)
for (const [key, value] of myObjectEntries) {//destruct
    console.log(`The key ${key} has a value ${value}`)
}
