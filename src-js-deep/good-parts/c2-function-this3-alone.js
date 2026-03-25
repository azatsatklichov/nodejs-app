


/**
 * JavaScript globalThis
In JavaScript, globalThis is a special built-in object that provides a standard way to access the global object, regardless of the environment your code runs in - whether it is a browser, Node.js, a Web Worker, or another JS runtime.

The global object is the top-level object in a JavaScript environment:


In browsers, it is window.
In Node.js, it is global.
In Web Workers, it is self.
Each environment used to have its own name for this object. This caused compatibility issues for code meant to run everywhere.

globalThis was introduced in ECMAScript 2020 (ES11) to solve that problem. It is a unified reference to the global object, no matter the environment.

globalThis === window; // true in browsers
globalThis === global; // true in Node.js


 */
//In a regular function in strict mode, when used outside a function, this also refers to the global object:
let x = this;
console.log(x) //why empty ??


function myFunctionr() {
  return this;
} 
console.log(myFunctionr());
