/**
 * JavaScript has 8 Datatypes
A JavaScript variable can hold 8 types of data:


 */
// String - A text of characters enclosed in quotes
let color = "Yellow";
let lastName = "Johnson";

// Number - A number representing a mathematical value
let length = 16;
let weight = 7.5;

// BigInt - A number representing a large integer
let x0 = 1234567890123456789012345n;
let y0 = BigInt(1234567890123456789012345)

// Using an integer literal with an n suffix:
let xz = 999999999999999n;

// Using the BigInt() constructor with a string:
let yz = BigInt("999999999999999"); //

//Warning !! Numbers are only accurate up to 15 digits.
let xl = BigInt(9999999999999999); //Inaccurate: 10000000000000000

//The JavaScript typeof a BigInt is "bigint":
let type = typeof xz; //bigint 



//Arithmetic between a BigInt and a Number is not allowed (will result in a TypeError).
let xb = 10n;
let yb = 5;
let zb = xb + yb; // ❌ TypeError

//To fix that, explicitly convert one:
let zb2 = Number(xb) + yb;

// Boolean - A data type representing true or false
let x = true;
let y = false;

// Object - A collection of key-value pairs of data
const person = {firstName:"John", lastName:"Doe"};

// Array object - an object  to represent Array 
const cars = ["Saab", "Volvo", "BMW"];

// Date object - an object to represent Date
const date = new Date("2022-03-25");

// Undefined - A primitive variable with no assigned value
let x2;
let y2;

// Null - A primitive value representing object absence
let x3 = null;
let y4 = null;

// Symbol - A unique and primitive identifier
const x5 = Symbol();
const y5 = Symbol();
