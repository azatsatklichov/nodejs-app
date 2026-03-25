

console.log('\n\n-----Self-Invoking Functions-------- ')

/**
Immediately Invoked Function Expressions
An IIFE is short for an Immediately Invoked Function Expression.

An IIFE is a function that invokes itself when defined.

What Is an IIFE?
Normally, a function runs only when it is called.

An IIFE runs automatically when the JavaScript engine reads it (compiles it).

When is IIFE Used?
To create a private scope
To run setup code once
In older JavaScript code
Avoid Polluting the Global Scope
Everything inside an IIFE is private to that function.

Variables inside an IIFE cannot be accessed from outside.


How an IIFE Works
Function expressions can be made self-invoking.

A self-invoking function expression is invoked (started) automatically, without being called.

Parentheses around the function tell JavaScript to treat the function as an expression.

Note
You can only self-invoke a function expression.

You can not self-invoke a function declaration.


*/

//IIFE as a Module (Private Variables)
const counter = (function () {
  let value = 0;
  return {
    increment() { value++; },
    get() { return value; }
  };
})();

counter.increment();
let x = counter.get();
 console.log(x);



 //The function below is also called an anonymous self-invoking function (function without name).
 (function (name) {
  let text = "Hello " + name;
   console.log("=> "+text); 
    let x = 10;
})("John Doe"); 
// x is not accessible here



//Arrow Function IIFE
(() => {
  let text = "Hello! I called myself.";
  console.log(text); 
})();


//Arrow Function IIFE with Parameter
((name) => {
  let text = "Hello " + name;
  console.log(text); 
})("John Doe");


//Named Function Expression IIFE
(function greet() {
  let text = "Hello! I called myself.";
  console.log(text); 
})();

//greet(); Reference error you can not invoke it

 

/**
 * Notes
Self Invocing Functions were heavily used before ECMAScript 6

Today, JavaScript let, const, and modules have reduced the need for them.

But they can still be useful for:

Running setup code that should immediately
Creating private variables and private scope
Avoiding global scope pollution
Working with older JavaScript code that rely on them
When Not to Use IIFE
When using modern JavaScript modules
When simpler code is sufficient



Common Mistakes
------------------
Forgetting the Final Parentheses: Without (), the function will not run.

Confusing IIFE with Normal Functions: IIFEs cannot be called again.

Overusing IIFEs: Modern JavaScript often does not need them.
 */



