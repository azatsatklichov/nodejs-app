/**
 * JavaScript has 8 Datatypes
A JavaScript variable can hold 8 types of data:

https://www.w3schools.com/js/js_datatypes_objects.asp


 * 
 * 
 * Summary
    There are 8 basic data types in JavaScript.

    Seven primitive data types:
    number for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1).
    bigint for integer numbers of arbitrary length.
    string for strings. A string may have zero or more characters, there’s no separate single-character type.
    boolean for true/false.
    null for unknown values – a standalone type that has a single value null.
    undefined for unassigned values – a standalone type that has a single value undefined.
    symbol for unique identifiers.
    And one non-primitive data type:
    object for more complex data structures.
    The typeof operator allows us to see which type is stored in a variable.

    Usually used as typeof x, but typeof(x) is also possible.
    Returns a string with the name of the type, like "string".
    For null returns "object" – this is an error in the language, it’s not actually an object.
 */


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
