//https://www.geeksforgeeks.org/node-js-timers-complete-reference/
/**
 * The Timers module in Node.js contains various functions that allow us to execute a block of code or a function after a set period of time. The Timers module is global, we do not need to use require() to import it.

Timers module has the following functions:

Scheduling Timers: It is used to call a function after a set period of time.
setImmediate()
setInterval()
setTimeout()
 */

// Executed after 3000 milliseconds 
// from the start of the program
setTimeout(function A() {
  return console.log('Hello World! - setTimeout');
}, 3000);

// executed right away
console.log('Executed before A...');

setInterval(function A() {
  return console.log('Hello World! - setInterval');
}, 1000);

// Executed right away
console.log('Executed before A...');