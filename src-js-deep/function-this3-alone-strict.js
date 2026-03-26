//In a regular function in strict mode, when used outside a function, this also refers to the global object:
"use strict";
let x = this;
console.log(x)


function myFunctionr() {
  return this;
} 
console.log(myFunctionr());
