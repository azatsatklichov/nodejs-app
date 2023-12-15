//https://www.geeksforgeeks.org/node-js-utility-complete-reference/
/**
 * Node.js Utility Module: The Util module in node.js provides access to various utility functions.

Syntax:

var util = require('util');

The util.callbackify() method is an inbuilt application programming interface of the util module which is used to run an asynchronous function and get a callback in the node.js.
Syntax: 
 

util.callbackify( async_function )
 */
// Allocating util module
const util = require("util");

// Async function to be called
// from util.callbackify() method
async function async_function() {
  return "message from async function";
}

// Calling callbackify()
let callback_function = util.callbackify(async_function);

// Listener for callback_function
callback_function((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// Async function to be called
// from util.callbackify() method
async function async_function2() {
  return Promise.reject(new Error("this is an error message!"));
}

// Calling callbackify()
const callback_function2 = util.callbackify(async_function2);

// Listener for callback_function
callback_function2((err, ret) => {
  // If error occurs
  if (err && err.hasOwnProperty("reason") && err.reason === null) {
    // Printing error reason
    console.log(err.reason);
  } else {
    console.log(err);
  }
});
