//The process of assigning the elements of an 
//array or the properties of an object to individual variables.
var apples = ["Granny Smith", "Opal", "Goldspur", "Ligol", "Melba"];
var apple1 = apples[0];
var apple2 = apples[1];
var apple3 = apples[3];
console.log(apple1); //Granny Smith
//destructing arrays
var jablko1 = apples[0], jablko2 = apples[1], jablko3 = apples[2];
console.log(jablko1); //Granny Smith
// const LN10 = Math.LN10;
// const LOG10E = Math.LOG10E;
var LN10 = Math.LN10, LOG10E = Math.LOG10E;
var myObj = {
    z: undefined,
    y: 4,
    x: 3
};
var x = myObj.x, y = myObj.y, _a = myObj.z, z = _a === void 0 ? 5 : _a;
console.log(y); // 4 
console.log(z); // 5, when destructing, default value used
var car = {
    model: "Skoda Fabia Kombi",
    karoserie: "Kombi",
    assembly: "Mlada Boleslav",
    cena: 34,
};
// let model = car.model;
// let karoserie = car.karoserie
// let assembly = car.assembly;
//property names exact match.
var model = car.model, karoserie = car.karoserie, assembly = car.assembly, cena = car.cena;
console.log(model); //new variable
car = {
    model: "RAV4",
    karoserie: "SUV",
    assembly: "Toyota",
    cena: 1200000,
};
//if object props not match or different naming
var znacka = car.model, style = car.karoserie, factory = car.assembly;
console.log(znacka); //new variable
/**
 * Array and Object Destructuring in Function Parameters
Extracting values from arrays or objects passed as function parameters can be verbose. Use destructuring in function parameters to directly extract values.

 */
var user = { name: 'Jane', age: 25 };
console.log(greet(user)); // "Hello, Jane! You are 25 years old."
function greet(_a) {
    var name = _a.name, age = _a.age;
    return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
}
//Default Values in Destructuring
/**
 * Handling missing properties when destructuring objects can be cumbersome. Use default values in destructuring to provide fallback values.
 */
var userr = { name1: 'Jane', age1: undefined };
var name1 = userr.name1, _b = userr.age1, age1 = _b === void 0 ? 28 : _b;
console.log(age1); //   28
// Parameter Destructuring in Callbacks
var users = [{ id: 1, name: 'Jane' },
    { id: 2, name: 'John' },];
users.forEach(function (_a) {
    var id = _a.id, name = _a.name;
    console.log("User ID: ".concat(id, ", User Name: ").concat(name));
});
