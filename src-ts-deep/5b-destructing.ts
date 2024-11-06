//The process of assigning the elements of an 
//array or the properties of an object to individual variables.


let apples: string[] = ["Granny Smith", "Opal", "Goldspur", "Ligol", "Melba"];

let apple1 = apples[0];
let apple2 = apples[1];
let apple3 = apples[3];
console.log(apple1); //Granny Smith

//destructing arrays
let [jablko1, jablko2, jablko3] = apples;
console.log(jablko1); //Granny Smith


// const LN10 = Math.LN10;
// const LOG10E = Math.LOG10E;
const { LN10, LOG10E } = Math;

const myObj = {
  z: undefined,
  y: 4,
  x: 3
}
const { x, y, z = 5 } = myObj
console.log(y) // 4 
console.log(z) // 5, when destructing, default value used



let car = {
  model: "Skoda Fabia Kombi",
  karoserie: "Kombi",
  assembly: "Mlada Boleslav",
  cena: 34,
};

// let model = car.model;
// let karoserie = car.karoserie
// let assembly = car.assembly;

//property names exact match.
let { model, karoserie, assembly, cena } = car;
console.log(model); //new variable

car = {
  model: "RAV4",
  karoserie: "SUV",
  assembly: "Toyota",
  cena: 1200000,
};

//if object props not match or different naming
let { model: znacka, karoserie: style, assembly: factory } = car;
console.log(znacka); //new variable


/**
 * Array and Object Destructuring in Function Parameters
Extracting values from arrays or objects passed as function parameters can be verbose. Use destructuring in function parameters to directly extract values.

 */
function greet({ name, age }) {
  return `Hello, ${name}! You are ${age} years old.`;
}


const user = { name: 'Jane', age: 25 };
console.log(greet(user)); // "Hello, Jane! You are 25 years old."



//Default Values in Destructuring
/**
 * Handling missing properties when destructuring objects can be cumbersome. Use default values in destructuring to provide fallback values.
 */

const userr = { name1: 'Jane', age1: undefined };
const { name1, age1 = 28 } = userr;
console.log(age1); //   28


// Parameter Destructuring in Callbacks
const users = [
  { id: 1, name: 'Jane' },
  { id: 2, name: 'John' },];
  
users.forEach(({ id, name }) => {
  console.log(`User ID: ${id}, User Name: ${name}`);
});

