
//https://www.w3schools.com/js/js_function_this.asp
console.log('\n\n  JS this keyword')
/**
 * By default both browser and node applications work in SLOPPY mode if you have not set the 'STRICT' mode. 
And inherits everithing from Javascript SLOPPY Architecture which ignores some errors (closes one eye to error) 
and causing functions to inherit the GLOBAL context. 

STRICT mode brings many advantagesto your code, the main one being separating out function contexts from GLOBAL context. 
Both files and functions can be made STRICT by adding the "use strict" text at the top. 


In general, strict mode is a more reliable way to write code. As well as that, 
it’s pretty bad practice to expose global variables unknowingly to downstream scripts, which should perhaps not have access to them.
 * 
 * 
 * 
What is this?
When the this keyword is used in a function, it refers to an Object.

Which Object, is not decided when the function is written.

The value of this is decided when the function is called.

Functions are Object Methods
All JavaScript functions are object methods.

A function can be:
--------------
A method of a JavaScript object
A method of a JavaScript class  
A method of a JavaScript function  
A method of the global object



this in an Object Method
----------
When a function is an object method: this refers to the object that owns the method.
 */ 
const person = {
  firstName: "Ele",
  lastName: "Mele",
  fullName: function() {
    return this.firstName + " " + this.lastName; // this refers to the person object.
  }
};
console.log(" this refers to the person object:  "+person.fullName());



console.log(" \n  this in a Function (Default)");
/**
 * this in a Function (Default)
By default, when this is used in a regular function, this refers to the global object.

In a browser window, the global object is [object Window]:
In a NODE.JS, the global object 
 */
function myFunctionr() {
  return this;
}
console.log("this In a NODE.JS, the global object. In Browser it is a WINDOW object "+myFunctionr());
console.log(myFunctionr());



console.log(" \n  this in a Function (Strict Mode) - see c2-function-this2-strict.html, here it does not work");
/**
 * JavaScript strict mode does not allow default binding.

In strict mode, this used inside a function is undefined.
 */
"use strict";
function myFunctionk() {
  return this;
}
console.log("In strict mode, this used inside a function is undefined. "+myFunctionk());
console.log(myFunctionk());






console.log(" \n  Arrow Functions in Methods - there are no binding of this");
/**
 * Note
With arrow functions there are no binding of this.

They are not well suited for defining object methods.
 */
const personz = {
  firstName: "John",
  sayHello: () => {
    return this.firstName; //With arrow functions there are no binding of this
  }
};

console.log(personz.sayHello())

console.log('\nArrow functions can be useful inside methods when you want to keep the same this value.')
const personz2 = {
  firstName: "John",
  sayHello: function() {
    return () => this.firstName;
  }
}; 
console.log(personz2.sayHello())



console.log('\nArrow Notation Functionality with this')
/**
 * Arrow functions are a little different from other functions in that they do not have their own context.
 * 
 * That means that even in strict mode, they inherit it from their parents. This functionality only really makes sense in strict mode:
 * 
 * try beow in browser
 */
"use strict"
console.log(this) // Window { }
let words = () => {
   console.log(this)
}
words() // console logs Window { }


/**
 * If your arrow function is inside another function, which is not using arrow notation, it inherits the context from that parent function. This can be seen in the following example: 
 * 
 * in browser 
 */
"use strict"
let contextualFunction = function() {
let words = () => {
console.log(this) // console logs undefined
}
words()
}
contextualFunction() // console logs undefined




/**
 * What is this?
In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
In methods like call(), apply() and bind(), this can refer to any object.


Note
this is not a variable.

this is a keyword.

You cannot change the value of this.

This Precedence
Use the following precedence of order to determine which object this refers to:

Order	Object	Because
1	bind()	this is in a function being called using bind()
2	apply()	this is in a function being called using apply()
2	call()	this is in a function being called using call()
3	Object method	this is in an object function (method)
4	Global scope	this is in a function in the global scope


 */


