/**
 * Node.js console module is a global object that provides a simple debugging console 
 * similar to JavaScript to display 
 * different levels of the message. It is provided by web browsers.
 * 
 * Console class: The console class methods are console.log(), console.error() 
 * and console.warn() to display Node.js stream.
 * 
global console: It is used without calling require(‘console’).
 */

/**
 * If you observe below example, we have created a simple object using Console
 * class with configurable output
 *  streams and we have created a Console class object by using console.Console
 */
// It requires the fs module
const fs = require("fs");

const out = fs.createWriteStream("./stdout.log");
const err = fs.createWriteStream("./stderr.log");
const myobject = new console.Console(out, err);

// It will display 'This is the first example' to out
myobject.log("This is the first example");
// It will display 'This is the second example' to out
myobject.log("This is the %s example", "second");
// It will display 'Error: In this we creating some error' to err
myobject.error(new Error("In this we creating some error"));
const num = "third";

// It will display 'This is the third error' to err
myobject.warn(`This is the ${num} example`);

///profile
/**
 * The console module provides a simple debugging console that is provided by web browsers which export two specific components:

A Console class that can be used to write to any Node.js stream. Example: console.log(), console.error(), etc.
A global console that can be used without importing console. Example: process.stdout, process.stderr, etc.
The console.profile() (Added in v8.0.0) method is an inbuilt application programming interface of the ‘console‘ module which doesn’t display anything unless used in the inspector.
 It starts a JavaScript CPU profile with an optional label until console.profile() is called. The profile is then added to the Profile panel of the inspector. 
 */
// Starting MyLabel console profile
console.profile("MyLabel");

// Doing some task
for (var i = 0; i < 4; i++) {
  // Printing some task
  console.log("Doing task no:", i);
}

// Finishing MyLabel profile
console.profileEnd("MyLabel");

