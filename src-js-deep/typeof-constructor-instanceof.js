



console.log("-----");
console.log( typeof 0 ); // "number"
console.log( typeof new Number() ); // "object"
console.log( typeof Infinity ); //"number"
console.log( typeof NaN ); // "number"
console.log( typeof 'Hi' ); // "string"
console.log( typeof new String("Hi") ); // "Object"
console.log( typeof true ); // "boolean"
console.log( typeof new Boolean(true) ); // "object"
console.log( typeof null ); // "object"
console.log( typeof undefined ); // "undefined"
//console.log( typeof new Symbol() ); // "symbol" - (careful, only in ES6)
console.log( typeof [] ); // "object"
console.log( typeof new Date() ); // "object"
console.log( typeof /^$/ ); // "object"
console.log( typeof new RegExp('^$')); // "object"
console.log( typeof {a: "abc"} ); // "object"
console.log( typeof typeof {} ); // "string"
console.log( typeof [1,2,3]); // "object", not "array"
console.log( typeof new Array(1,2,3)); // "object"
console.log(typeof function () {}); //function

console.log("===========");

//You cannot use typeof to determine if a JavaScript object is an array (or a date).
/*
Please observe:
The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined *
*/
console.log("-----");

//The constructor property returns the constructor function for all JavaScript variables.
console.log("John".constructor);             // Returns function String()  {[native code]}
console.log((3.14).constructor);             // Returns function Number()  {[native code]}
console.log(false.constructor);           // Returns function Boolean() {[native code]}
console.log([1, 2, 3, 4].constructor);         // Returns function Array()   {[native code]}
console.log({name: 'John', age: 34}.constructor);  // Returns function Object()  {[native code]}
console.log(new Date().constructor);  // Returns function Date()    {[native code]}
console.log(new Number(3).constructor);//[Function: Number]

console.log(function () {
}.constructor); // Returns function Function(){[native code]}

//You can check the constructor property to find out if an object is an Array (contains the word "Array"):
var myArr = [1,2,3,4];
console.log(myArr.constructor.toString().indexOf("Array") > -1);
console.log(myArr.constructor === Array );//2-way

var myNum= new Number(3);
console.log(myNum.constructor.toString().indexOf("Number") > -1);
console.log(myNum.constructor === Number);


console.log(" **************  "); //instanceof and typeof
let foo = 1;
console.log(typeof foo);

console.log(typeof null);

typeof Number('1') === 'number';
typeof Number('foo') === 'number';
typeof NaN === 'number';
//console.log(typeof(typeof document.all));

//instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
//This means that we can use it to check if the object is constructor from a given class or constructor function.
//It returns true if an object is an instance of a class or constructor function and false otherwise.

console.log(/regularexpression/ instanceof RegExp); // true
console.log(typeof /regularexpression/); // object

console.log([] instanceof Array); // true
console.log(typeof []); //object

console.log({} instanceof Object); // true
console.log(typeof {}); // object

const a = "I'm a string primitive";
const b = new String("I'm a String Object");
console.log(a instanceof String); //returns false
console.log(b instanceof String); //returns true
