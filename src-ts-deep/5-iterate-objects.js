//This code runs fine, and yet TypeScript flags an error in it. Why?
var obj = {
    one: 'uno',
    two: 'dos',
    three: 'tres',
};
for (var k in obj) {
    var v = obj[k];
    //const v = obj.k;
    console.log(v);
    // ~~~~~~ Element implicitly has an 'any' type
    // because type ... has no index signature
}
//fix
for (var kStr in obj) {
    var k = kStr;
    // ^? const k: "one" | "two" | "three"
    var v = obj[k]; // OK
    console.log(v);
}
function foo(abc) {
    for (var k in abc) {
        // ^? const k: string
        var v = abc[k];
        // ~~~~~~ Element implicitly has an 'any' type
        // because type 'ABC' has no index signature
        console.log(v);
    }
}
var x = { a: 'a', b: 'b', c: 2, d: new Date() };
foo(x); // OK
var myObject = {
    firstName: "John",
    lastName: "Doe",
    age: 140
};
var myObjectKeys = Object.keys(myObject);
//Once we have extracted an array, then it is Iterable
for (var _i = 0, myObjectKeys_1 = myObjectKeys; _i < myObjectKeys_1.length; _i++) {
    var item = myObjectKeys_1[_i];
    console.log(item); //firstName, lastName, age
}
var myObjectVals = Object.values(myObject);
for (var _a = 0, myObjectVals_1 = myObjectVals; _a < myObjectVals_1.length; _a++) {
    var item = myObjectVals_1[_a];
    console.log(item); //John, Doe, 140
}
var myObjectEntries = Object.entries(myObject);
for (var _b = 0, myObjectEntries_1 = myObjectEntries; _b < myObjectEntries_1.length; _b++) { //destruct
    var _c = myObjectEntries_1[_b], key = _c[0], value = _c[1];
    console.log("The key ".concat(key, " has a value ").concat(value));
}
