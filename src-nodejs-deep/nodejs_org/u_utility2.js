// // Using require to access util module
const util = require("util");

// const debugLog = util.debuglog('run-app');

// // Use debuglog() method
// debugLog('hello from my debugger [%d]', 123);
// // SET NODE_DEBUG=run-app&&node util.js

// // Another way to import debuglog
// const { debuglog } = require('util');

// const debuglogue = debuglog('run-app1');

// // Use debuglog() method
// debuglogue('hello from run-app [%d]', 123);

// const a = "old Value";

// let deebuglog = util.debuglog('run-app2',
//     (debuging) => {

//         // Replace with a logging function
//         // that optimizes out
//         a = "new Value";

//         // Testing if the section is enabled
//         deebuglog = debuging;
//     });

// // prints the debuglog function
// console.log(util.inspect(deebuglog,
//     showHidden = true, compact = true));

// // Prints nothing
// console.log(a);

// // logs app *
// deebuglog();

// deebuglog('hi there, it\'s run-app [%d]', 2333);

function fun1() {
  var val1 = util.format("%s:%s:%s", "abc");
  // Returns: 'foo:%s'

  var val2 = util.format("%s:%s", "abc", "def", "ghi", "jkl");
  // Returns: 'foo:bar baz'

  var val3 = util.format(10, 20, 30);
  // Returns: '1 2 3'

  var val4 = util.format("%% : %s : %d");
  // Returns: '%% %s'

  var val5 = util.format("%% : %s", 567);
  // Returns: '% : 567'

  console.log(val1, "\n", val2, "\n", val3, "\n", val4, "\n", val5);
}

// Function call
fun1();

// Passing multiple values and
// -0 on string specifier
console.log("1.>", util.format("%%: %s", "abc", "def", -0));

// Passing multiple values
console.log("2.>", util.format("%%", "abc", "def", "ghi"));

// Passing bigInt to string specifier
console.log("3.>", util.format("%s", "abc", 94321321321223372036854775807));

// Creating and passing Object along
// with null prototype and a variable
console.log(
  "4.>",
  util.format(
    "%s",
    "abc",
    Object.create(null, { [Symbol.toStringTag]: { value: "def" } })
  )
);

// Passing string to Number specifier
console.log("5.>", util.format("%d", "abc", 94303685));

// Passing Symbol and Number to
// parseInt specifier
console.log(
  "6.>",
  util.format("%i", "2020 year 2021, ", "He was 40,", "10.33, ", "10, ", 10)
);

// Passing string and Numbers
// to parseFloat specifier
console.log(
  "7.>",
  util.format("%f", "94321321321.564000 year 6546", "abc", 943036854775807)
);

// Passing JSON string and Number
// to JSON specifier
console.log(
  "8.>",
  util.format(
    "%j",
    '{ "name":"John", "age":31, "city":"New York" }',
    "abc",
    943036854775807
  )
);

// Passing class, string, and Number
// to object specifier
console.log("9.>", util.format("%o", class Bar {}, "abc", 943036854775807));

// Passing class, string, and Number
// to Object specifier
console.log(
  "10.>",
  util.format(
    "%o:%d",
    class Foo {
      get [Symbol.toStringTag]() {
        return "abc";
      }
    },
    "abc",
    943036854775807
  )
);

// Random class
class randomClass {}

// Inspecting random class
console.log("11.>", util.inspect(new randomClass()));

const nestedObject = {};
nestedObject.a = [nestedObject];
nestedObject.b = [["a", ["b"]], "b", "c", "d"];
nestedObject.b = {};
nestedObject.b.inner = nestedObject.b;
nestedObject.b.obj = nestedObject;
// Directly passing the JSON data
console.log(
  "7.>",
  util.inspect(
    [
      { name: "Amit", city: "Ayodhya" },
      { name: "Satyam", city: "Lucknow" },
      { name: "Sahai", city: "Lucknow" },
    ],
    false,
    3,
    true
  )
);

// Directly calling inspect method with single property
console.log("8.>", util.inspect(nestedObject), { depth: 0 });

// Creating object1
const object1 = {
  alfa: "beta",
  romeo: [10, 20],
};

// Creating object2
const object2 = {
  alfa: "beta",
  romeo: [10, 20],
};

// Returns false
console.log("1.>", object1 == object2);

// Returns true
console.log("2.>", util.isDeepStrictEqual(object1, object2));

// Creating a fake date
const wrongDateType = {};

// Comparing wrongDateType with correct date
console.log("3.>", util.isDeepStrictEqual(wrongDateType, Date.prototype));

const anObject = {};

// Prototype is not same
console.log("4.>", util.isDeepStrictEqual(anObject, wrongDateType));
// Returns false

// Creating new date
const newDate = new Date();

// Comparing Date formats
console.log("5.>", util.isDeepStrictEqual(newDate, wrongDateType));
// Returns false

const weakMapOne = new WeakMap();
const weakMapTwo = new WeakMap([[{}, {}]]);

// Comparing two weakMaps
console.log("6.>", util.isDeepStrictEqual(weakMapOne, weakMapTwo));
// Returns true

// String and integer are compared
// wrong 1 !== '1'.
console.log("1.>", util.isDeepStrictEqual({ a: 1 }, { a: "1" }));
// Returns false

// Comparing Not a Number with Not a Number
console.log("2.>", util.isDeepStrictEqual(NaN, NaN));
// Returns true

// Unwrapped numbers are different
console.log("3.>", util.isDeepStrictEqual(Object(1), Object(2)));
// Returns false

// Directly importing isDeepStrictEqual method
const { isDeepStrictEqual } = require("util");

// Unwrapped strings are same
console.log("4.>", isDeepStrictEqual(Object("alfa"), Object("alfa")));
// Returns true

// Comparing both negative values
console.log("5.>", isDeepStrictEqual(-0, -0));
// Returns true

// Same Value Comparison with different sign
console.log("6.>", isDeepStrictEqual(0, -0));
// Returns false
