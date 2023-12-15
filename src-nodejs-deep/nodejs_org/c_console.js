/**
 * Node.js console module is a global object that provides a simple debugging 
 * console similar to JavaScript to display 
 * different levels of the message. It is provided by web browsers.
 * 
 * Console class: The console class methods are console.log(), console.error() 
 * and console.warn() to display Node.js stream.
 * 
global console: It is used without calling require(‘console’).
 */

/**
 * console.count(): It is used to count the number of times a specific label has been called.
 * 
console.clear(): It is used to clear the console history.

console.info(): It is used to write a messages on console and it is an alias of console.log() method.

console.time(): It is used to get the starting time of an action.

console.timeEnd(): It is used to get the end time of specific action.

console.dir(): It use util.inspect() on object and prints the resulting string to stdout.
 */
console.log("log");
console.error("err");
console.warn("warn");
console.log(console.count());
console.clear();
console.log(console.time());
console.log(console.timeEnd());
console.log(console.dir());

console.assert(true, "error message 1");
console.assert(false, "error message 2");

var a = 10,
  b = 5;

console.assert(1 == 1, "error at 1==1");
console.assert(1 != 1, "error at 1!=1");
console.assert(3 & 9, "error at 3&9");
console.assert(1 & 6, "error at 1&6");
console.assert(0 && 9, "error at 0&&9");
console.assert(1 && 8, "error at 1&&8");
console.assert(a % b == 1, "error at a%b==1");
console.assert(a > b, "error at a>b");
console.assert(b > a, "error at b>a");

// Both two lines will not display
// the result on screen
console.log("GeeksforGeeks");
console.log("A computer science portal");

// Clear the previous screen
console.clear();

// Display the content
console.log("Clear the console screen");

// Accessing console module
//const console = require('console');

// Calling console.count()
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count("a");
console.count("b");
console.count("b");
console.count("b");

/**
 * The console.countReset() method is an inbuilt application programming interface
 * of the console module which is used to reset the
 * count for the specific label passed to it as a parameter.
 */
// Resetting counter
console.countReset("a");
console.countReset("b");

console.count("a");
console.count("b");

// Calling console.count() method
// with no parameter to count
// default label
console.count();
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count();
console.count();

// Resetting counter
console.countReset();
console.countReset("a");
console.countReset("b");

console.count();
console.count("a");
console.count("b");

/**
 * The console.debug() method is an inbuilt application programming interface
 * of the console module which is used to print
 * messages to stdout in a newline. Similar to console.log() method.
 *
 * console.debug(data, args);
 */
// Calling console.debug()
console.debug("This is a sample debug message!");
console.debug("Sample debug %s message with args: %d ", "lunix", 39);
console.debug(
  "Debug message: Warning " + "at function %s: line number %d ",
  "ff()",
  96
);

var isDebugMode = true;
console.custom_debug = function (message) {
  if (isDebugMode) {
    console.log(message);
  }
};

console.custom_debug("Custom debug message");

/**
 * The console.dir() method is used to get the list of object properties of a
 * specified object. These object properties also have child objects,
 * from which you can inspect for further information.
 */

x = 20;
y = 50;

// Check condition
if (x > y) {
  console.error("%d is greater then %d", x, y);
} else {
  console.error("%d is less then or equal to %d", x, y);
}

var isDebugMode = true;
console.custom_error = function (message) {
  if (isDebugMode) {
    console.error(message);
  }
};

console.custom_error("custom ERR message");

console.info("this is a %s" + " sample info message!");

console.info("sample info message " + "with args: %d", 34);
console.info(
  "info message: Warning " + "at function %s: line number" + " %d ff()",
  96
);

var isDebugMode = true;
console.custom_info = function (message) {
  if (isDebugMode) {
    console.log(message);
  }
};

console.custom_info("custom info message");


///trace 
/**
 * which is used to print stack trace messages to stderr in a newline.
 *  Similar to console.error() method.
 */

// Calling console.trace() method
console.trace("stack teace sample");
console.trace("stack trace sample with args: %d", 39);


   
// Calling console.trace() method
console.trace("stack trace message: "
    + "at %s: line no: %d ", "ff()", 96);
   
var isTrace = true;
  
console.custom_trace = function(message) {   
  if (isTrace) {
    console.trace(message);
  }
}
  
console.custom_trace("custom trace message");

/**
 * The console.timeLog() method is an inbuilt function in Nodejs that is used to display the time for each execution.
 * This function is proved to be effective when used in a loop.
 */
console.time("executionTime");
for (let i = 0; i < 10; i++) {
  // Printing execution time for each
  console.timeLog("executionTime", " calc square = " + i * i);
}

// Time started
console.time("totalExecutionTime");

// Time started
console.time("executionTime2");

for (let i = 0; i < 10; i++) {
  // Printing execution time for each
  console.timeLog("executionTime2");
}

// Printing total execution time
console.timeLog("totalExecutionTime");

/**
 * The console.time() method is the console class of Node.js.
 * It is used to starts a timer that is used to compute the time taken by a piece of code or function. The method console.timeEnd() is used to stop the timer and output the elapsed time in milliseconds to stdout.
 * The timer can be accurate to the sub-millisecond.
 */
// Sample function
function addCount() {
  // Variable declaration
  var sum = 0;

  for (var i = 1; i < 100000; i++) {
    // Adding i to the sum variable
    sum += i;
  }

  // Return sum value
  return sum;
}

// Starts the timer
console.time();

// Function call
addCount();

// Ends the timer and print the time
// taken by the piece of code
console.timeEnd();

// Sample function
function addCount() {
  // Variable declaration
  var sum = 0;
  for (var i = 1; i < 100000; i++) {
    // Adding i to the sum variable
    sum += i;
  }
  return sum; // returning sum
}

var timetaken = "Time taken by addCount function";

// Starts the timer. The label value is timetaken
console.time(timetaken);

addCount(); // function call

// Ends the timer and print the time
// taken by the piece of code
console.timeEnd(timetaken);

// Sample function
function addCount() {
  var sum = 0; // Variable declaration
  for (var i = 1; i < 100000; i++) {
    sum += i; // Adding i to the sum variable
  }
  return sum; // returning sum
}

function countTime() {
  var timetaken = "Time taken by addCount function";

  // Starts the timer, the label value is timetaken
  console.time(timetaken);

  console.log(addCount()); // function call

  // Ends the timer and print the time
  // taken by the piece of code
  console.timeEnd(timetaken);
}

var label2 = "Time taken by countTime function";

// Starts the timer, the label value is label2
console.time(label2);

countTime(); // function call

// Ends the timer and print the time
// taken by the piece of code
console.timeEnd(label2);

/**
 * The console.table() method is an inbuilt application programming
 * interface of the console module which is used to print the table
 *  constructed from it’s parameters into the console.
 *
 * console.table(data, properties);
 */

// Calling console.table()
// without construction rule
console.table([
  { a: 1, b: 2 },
  { a: 3, b: 7, c: "y" },
]);

// With construction rule
console.table(
  [
    { a: 1, b: 2 },
    { a: 3, b: 7, c: "y" },
  ],
  ["a", "b"]
);

// Calling console.table()
// fails to parse, so simply
// print the argument
console.table("arg");

// Blank table
console.table([]);

const buffero = Buffer.from([1, 2, 3, 4]);  
console.table([JSON.stringify(buffero)]);  
