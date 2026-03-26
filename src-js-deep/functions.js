
/**
 * This quo function is designed to be used without the new prefix, so the name is not
capitalized. When we call quo, it returns a new object containing a get_status
method. A reference to that object is stored in myQuo. The get_status method still
has privileged access to quo’s status property even though quo has already returned.
get_status does not have access to a copy of the parameter; it has access to the
parameter itself. This is possible because the function has access to the context in
which it was created.

This is called closure. 
 */




console.log('\n\n  Advanced Functions')
/**
 * Function Definitions vs Function Declarations
Function definition is a general term for defining a function.

Function declaration is one specific way to define a function.

Examples of function definitions include:

Function declarations
Function expressions
Arrow functions
 */
// Function Declaration
function myFunction1(x, y) {
    return x * y;
}
console.log("Function declaration: "+myFunction1(3, 4))

// Function Expression (Named)  //but name not used 
const myFunction2 = function name(x, y) {
    return x * y;
};
console.log("Function expression named function: "+myFunction2(3, 4))
// Function Expression (Anonymous)
/**
 * 
 *Function Expressions
A function expression stores a function inside a variable.

The function can be anonymous (without a name). Actually here you can use this variable as name of function 

Function expressions are executed only when the code reaches them.
 */
const myFunction3 = function (x, y) {
    return x * y;
};
//After a function expression has been stored in a variable, the variable can be used as a function:
console.log("Function expression anonymous function: "+myFunction3(3, 4))


// Arrow Function
const myFunction4 = (x, y) => x * y;
console.log("Arrow function: "+myFunction4(3,4))

// Function Constructor - The Function() Constructor
const myFunction5 = new Function("x", "y", "return x * y");
console.log("Function() constructor: "+myFunction5(3,4))

// Object Method
const obj = {
    myFunction6(x, y) {
        return x * y;
    },
};
console.log("Object method: "+obj.myFunction6(3,4))

///method in class
class MyClass {
    myFunction7(x, y) {
        return x * y;
    }
}
myClassInstance  = new MyClass();
console.log("method in class: "+myClassInstance.myFunction7(3,4))


console.log('\n\n  Hoisting')
/**
Function declarations are hoisted to the top of their scope.

Function expressions are not hoisted in the same way. Can be used in various contexts, such as arguments to other functions (callbacks), immediately invoked function expressions, and assigned to object properties.

Function declarations can be called before they are defined. Primarily used for general-purpose functions that need to be available globally or in a specific scope.

Function expressions can not be called before they are defined.
 */

//Function declarations can be called before they are defined:
/**
 * Hoisting: 
 * The function is moved to the top of its scope before code execution, allowing you to call it from anywhere within that code scope, even before its definition.
 */
console.log(add(2, 3)) // Will work

function add(a, b) { return a + b; }

//Function expressions can not be called before they are defined:
/**
 * Hoisting:
 * The variable holding the function might be hoisted (depending on var, let, or const), but the function assignment itself is not. You can only call it after it has been defined in the code scope.
 */
//console.log(add2(2, 3)) //ReferenceError: Cannot access 'add2' before initialization. no hoisting 
const add2 = function (a, b) { return a + b; };





console.log('\n\n Functions are Objects')
/**
 * Functions are Objects
The typeof operator in JavaScript returns function for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The arguments.length property returns the number of arguments received by the function:
 */
function multiply(a, b) {
  return arguments.length;
}

// Returns 0
console.log(multiply());

// Returns 2
console.log(multiply(3, 5 , "sa"));



console.log('\n\n Callbacks - intended  idea that the outer function will "call you back" later when it has finished its task')
/**
 * "I will call back later!"
A JavaScript callback is a function passed as an argument to another function, which is then executed (or "called back") at a later point in time to complete a specific task.

This mechanism is fundamental to JavaScript's event-driven and asynchronous programming model.

What is a Callback Function?
A callback function is a function passed as an argument into another function.

A callback function is intended to be executed later.

Later is typically when a specific event occurs or an asynchronous operation completes.

Note
The name "callback" stems from the idea that the outer function will "call you back" later when it has finished its task

Types of Callbacks
Asynchronous Callbacks
Asynchronous callbacks are executed at a later time, allowing the main program to continue running without waiting.

This is essential for preventing the application from freezing during long-running tasks like network requests.

Synchronous Callbacks
Synchronous Callbacks are executed immediately within the outer function, blocking further operations until completion.

Array methods like map(), filter(), and forEach() use synchronous callbacks.

Event Handling
Callbacks are often used in JavaScript, especially in event handling.

User interactions, such as button clicks or key presses, can be handled by providing a callback function to an event listener:


Asynchronous Operations
Windows functions like setTimeout() use callbacks to execute code after a specified delay.
 */
console.log('Array methods like map(), filter(), and forEach() use synchronous callbacks.')
console.log('\nMany built-in array methods like map(), filter(), and forEach() accept callback functions to define the action performed on each element.')
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "\t";
  console.log(txt)
}


//The map() method creates a new array by performing a function on each array element
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunctionz);
console.log(numbers2)
function myFunctionz(value) {
  return value * 2;
}


console.log('\n Sequence Control')
/**
 *In JS synchronous method are called sequentially. But if you have somehow mixed call order, you can still manage it via callback/ 
 * 
Sometimes you would like to have better control over when to execute a function. 
Suppose you want to do a calculation, and then display the result. 
You could first call the calculator function myCalculator, and then call the display function myDisplayer: 

Now it is time to bring in a callback.

Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
 */
function myDisplayer(some) {
    console.log('I am a called callback: '+some) 
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Call the displayer
myDisplayer('called alone');


console.log('\n Callback Key Concepts - in Java Pass Behavior as Argument via Lambdas')
/**
 * Function as an Argument
Because functions in JavaScript can be treated like any other variable or object, you can pass them as arguments to other functions.

Deferred Execution
The key benefit of a callback is that it allows for deferred execution, meaning the callback function does not run immediately.

Instead, it runs later, after a specific condition is met, an event occurs, or an asynchronous operation completes.

This mechanism ensures that the program can continue to execute other code while waiting for long-running tasks (like fetching data from a server, reading a file, or waiting for a user click) to complete
 */
console.log('The key benefit of a callback is that it allows for deferred execution, meaning the callback function does not run immediately.')