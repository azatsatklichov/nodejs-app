 
/**
 * Scope = Visibility
Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

Global scope
Function scope
Block scope



Global Scope
Variables declared Globally (outside any block or function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

Variables declared with var, let and const are quite similar when declared outside a block.

They all have Global Scope:
 */
var x = 1;    // Global scope

let y = 2;    // Global scope

const z = 3;  // Global scope

//A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


/**
 * Function Scope
Each JavaScript function have their own scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:
 */
function myFunction1() {
  var carName = "Volvo";  // Function Scope
}

function myFunction2() {
  let carName = "Volvo";  // Function Scope
}

function myFunction3() {
  const carName = "Volvo";  // Function Scope
}

// code here can NOT use carName

//Variables declared within a JavaScript function, are LOCAL to the function:
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName

/**
 * Local Variables has Function Scope
 * 
They can only be accessed from within the function
No scripts or functions outside the function can access them
Variables with the same name can be used outside the function
Variables with the same name can be used in different functions
Local variables are created when a function starts
Local variables are deleted when the function is completed
Arguments (parameters) work as local variables inside functions
 */




/**
 * Block Scope
 * 
Before ES6, JavaScript variables could only have Global Scope or Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that block.

This helps prevent unintended variable overwrites and promotes better code organization:
 */
{
  let x = 2;
}
// x can NOT be used here

/**
 * Variables declared with the var keyword can NOT have block scope.

Variables declared with the var keyword, inside a { } block; can be accessed from outside the block.
 */
{
  var x = 2;
}
// x CAN be used here



/**
 * Automatically Global
 * 
If you assign a value to a variable that has not been declared, it will become a GLOBAL variable.

This code example will declare a global variable carName, even if the value is assigned inside a function.
 */
myFunctionk();

// code here can use carName
carName = "Volvo XC 90 T8 Elh."
function myFunctionk() {
  carName = "Volvo"; //this is the error, becosue not declared 
}


/**
 * Strict Mode
All modern browsers support running JavaScript in "Strict Mode".

In "Strict Mode", undeclared variables are not automatically global.
 * 
 */



console.log('\n\n  CLOSURE -  JavaScript does not have block scope (when using VAR, but has BLOCK scope for LET). JavaScript does have function scope.')
/**
 * The good news about scope is that inner functions get access to the parameters and
variables of the functions they are defined within (with the exception of this and
arguments). 
This is a very good thing.

A more interesting case is when the inner function has a longer lifetime than its outer
function.
Earlier, we made a myObject that had a value and an increment method. Suppose we
wanted to protect the value from unauthorized changes.
Instead of initializing myObject with an object literal, we will initialize myObject by
calling a function that returns an object literal. That function defines a value variable.
That variable is always available to the increment and getValue methods, but
the function’s scope keeps it hidden from the rest of the program:

We are not assigning a function to myObject. We are assigning the result of invoking
that function. Notice the () on the last line. The function returns an object containing
two methods, and those methods continue to enjoy the privilege of access to the
value variable.
 */
var myObject2 = function () {
    var value = 0;
    return {
        increment2: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue2: function () {
            return value;
        }
    };
}();

var quo2 = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};
// Make an instance of quo.

var myQuo = quo2("amazed");
console.log(myQuo.get_status());
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


 