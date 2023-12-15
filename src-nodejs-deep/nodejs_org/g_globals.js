//Node.js Global Objects are the objects that are available in all modules.
//https://www.geeksforgeeks.org/node-js-globals-complete-reference/
//
https://www.geeksforgeeks.org/node-js-timers-module/
//Buffers are instances of the Buffer class in Node.js. Buffers are designed to handle binary raw data. Buffers allocate raw memory outside the V8 heap.
// Write JavaScript code here
cbuf = Buffer.alloc(256);
bufferlen = cbuf.write("Learn Programming with GeeksforGeeks!!!");
console.log("No. of Octets in which string is written : " + bufferlen);

//The Timers module in Node.js contains various functions that allow us to execute a block of code or a function after a set period of time.
/**
 * Timers module has the following functions:

Scheduling Timers: It is used to call a function after a set period of time.
          setImmediate()
          setInterval()
          setTimeout()

Cancelling Timers: It is used to cancel the scheduled timer.
          clearImmediate()
          clearInterval()
          clearTimeout()
 */
setInterval(function A() {
  return console.log("Hello World! setInterval");
}, 1000);

// Executed right away
console.log("Executed before A...");

//setTimeout() method: It schedules the execution of the callback after a certain time in milliseconds which is passed as a parameter.

// Executed after 3000 milliseconds
// from the start of the program
setTimeout(function A() {
  return console.log("Hello World! setTimeout");
}, 3000);

// executed right away
console.log("Executed before A...");

///4 clearImmediate() method: It is used to simply cancel the 
//Immediate object created by setImmediate() method.
var si = setImmediate(function A() {
  console.log(1);
});

// clears setInterval si
clearImmediate(si);

console.log(2);



//console
