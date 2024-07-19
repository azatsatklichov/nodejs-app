var a = "JavaScript";
var b = new String("JavaScript");

if (a == b) {
  console.log("a==b"); //printed a==b, values are equal
}
if (a === b) {
  console.log("a==b"); //skipped, because a and b have different types (string and object)
}

var c = new String("JavaScript");
if (b == c) {
  console.log("b==c"); //skipped, because b and c are different objects
}
if (b === c) {
  console.log("b==c"); //skipped, because b and c are different objects
}

console.log(Object.is(a, a)); //true
console.log(Object.is(a, b)); //false
console.log(Object.is(b, c)); //false
console.log(Object.is(b, b)); //true

console.log("---");
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(0 == ""); //true
console.log(1 == "1"); //true
console.log(1 == true); //true
console.log(0 === ""); //false
console.log(1 === "1"); //false
console.log(1 === true); //false

let check = new Boolean(false);
if (check) {
  console.log("WOW FOUND, even FALSE"); //FOUND, even FALSE
}

let check2 = false;
if (check2) {
  console.log("WOW FOUND, even FALSE"); //skipped
}

//array is complex type, even though [] has typeof Object
console.log([] instanceof Array); //true
console.log(typeof []); //object
//instance of only works for complex data type
const az = "I'm a string primitive";
const bz = new String("I'm a String Object");
console.log(az instanceof String); //returns false
console.log(bz instanceof String); //returns true

console.log(typeof 63); // "number"
console.log(typeof new Number()); // "object"
console.log(typeof Infinity); //"number"
console.log(typeof NaN); // "number"
console.log(typeof "Hi"); // "string"
console.log(typeof new String("Hi")); // "Object"
console.log(typeof true); // "boolean"
console.log(typeof new Boolean(true)); //"object"
console.log(typeof undefined); //"undefined"
console.log(typeof null); // "object“, but why not null?
//console.log( typeof new Symbol() ); // "symbol" - only in ES6
console.log(typeof []); //"object“ - arrays are objects.
console.log(typeof [1, 2, 3]); // "object", not "array"
console.log(typeof new Array(1, 2, 3)); // "object", not "array"
console.log(typeof new Date()); //"object", not "Date"
console.log(typeof /^$/); // "object“
console.log(typeof new RegExp("^$")); //"object"
console.log(typeof { a: "abc" }); //"object"
console.log(typeof typeof {}); //"string"
console.log(typeof function () {}); //function

var myObj = ["63"];
if (myObj && typeof myObj === "object") {
  console.log("I am an object");
}
myObj = null;
if (myObj && typeof myObj === "object") {
  console.log("I am an object");
}

var myArr = ["s", "a", "h", "e", "t", ".", "n", "e", "t"];
console.log(myArr.constructor.toString().indexOf("Array") > -1); //1-way
console.log(myArr.constructor === Array); //2-way

function oO() {
  var variable1, variable2;
  variable1 = 5;
  varaible2 = 6;
  return variable1 + varaible2;
}

console.log(oO()); //11
console.log(varaible2); //6

var carName = "Ford";
console.log(carName);
var carName; //still has value  Ford
console.log(carName);
var carName = 76; //type changed
console.log(carName);

function bad() {
  return;
  {
    myVal: true;
  }
}
console.log(bad()); //undefined

function good() {
  return {
    myVal: true,
  };
}
console.log(good()); //{ myVal: true }

var myApp = {};

console.log(parseInt("32")); //32
console.log(parseInt("32 meters")); //32

console.log(parseInt("08")); //32
console.log(parseInt("09")); //32

console.log(0.1 + 0.2); //0.30000000000000004
var z = (0.1 * 10 + 0.2 * 10) / 10; //workaround
console.log(z); //0.3

var num1 = 999999999999999,
  num2 = 9999999999999999;
console.log(num1); //999999999999999
console.log(num2); //10000000000000000

console.log(0.1 + 0.2 === 0.3); //false
x = 1.0000000000000001;
console.log(x === 1); //true

console.log(NaN !== NaN); //true
console.log(typeof NaN); //number

console.log(isNaN(NaN)); //true
console.log(isNaN(123)); //false
console.log(isNaN("hi")); //true

console.log("");
var isNumber = function isNumber(value) {
  return typeof value === "number" && isFinite(value); //not NaN & Infinity
};
console.log(isNumber(NaN)); //false
console.log(isNumber(123)); //true
console.log(isNumber("Oraz")); //false

console.log(10 + "10"); //1010
console.log("2" + "3"); //23
console.log(2 + 3); //5
console.log("2" - "3"); //-1
console.log(2 - 3); //-1

var elms = new Array(40, 100); //Creates an array with two elements
console.log(elms.length); //2
var elms = new Array(40); // Creates an array with 40 undefined elements!!!!!
console.log(elms.length); //40

console.log(""); //false

var person = []; //array
person[0] = "Meret";
person[1] = "63";
console.log(person.length + "; " + person[0]); //2; Meret

if (person && typeof person === "object" && person.constructor === Array) {
  console.log("I am an array");
}

var person = []; //re-define array with named indexes, becomes {}
person["name"] = "Maral";
person["age"] = "63";
console.log(person.length + "; " + person[0]); //0; undefined
console.log(Object.keys(person).length + "; " + person["age"]); //2; 63

if (
  person &&
  typeof person === "object" &&
  typeof person.length === "number" &&
  !person.propertyIsEnumerable("length")
) {
  console.log("I am truely an array");
}

var myObj = ["a", "65"];
if (myObj && typeof myObj === "object") {
  //todo
}

value = myObj["age"]; //undefined
if (value == null) {
  console.log("I am null"); //I am null
}
if (value == undefined) {
  console.log("I am undefined"); //I am undefined
}
if (value === null) {
  console.log("I am null"); //skipped
}
if (value === undefined) {
  console.log("I am undefined"); //I am undefined
}

console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(undefined == null); //true
console.log(undefined === null); //false

if (typeof myObj === "object" && myObj !== null)
  //Avoid creating object using wrappers
  var a = new String("a"); //String object
var b = new Number(23); //Number object
var c = new Boolean(true); //Boolean object
var d = new Object(); //Object object
var e = new Array(); //Array object

//Use primitives types instead
var a = "a";
var b = 23;
var c = true;
var d = {};
var e = [];

for (myProp in myObj) {
  if (myObj.hasOwnProperty(myProp)) {
    //...
  }
}
 