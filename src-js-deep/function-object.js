const { add } = require("lodash");

console.log('\n\Function Objects - The thing that is special about functions is that they can be invoked.\n')
/**
A function encloses a set of statements. Functions are the fundamental modular unit
of JavaScript. They are used for code reuse, information hiding, and composition.
 */
var c = 'Generally, the craft of programming  is the factoring of a set of requirements into a set of functions and data  structures.\n';
console.log(c);

/**
 * Function Objects 
 * 
Functions in JavaScript are objects. Objects are collections of name/value pairs having
a hidden link to a prototype object. Objects produced from object literals are
linked to Object.prototype. 

Function objects are linked to Function.prototype
(which is itself linked to Object.prototype). Every function is also created with two
additional hidden properties: the function’s context and the code that implements
the function’s behavior.

Every function object is also created with a prototype property. Its value is an object with a constructor property whose value is the function. 
This is distinct from the
hidden link to Function.prototype. The meaning of this convoluted construction will
be revealed in the next chapter.
*/
console.log('Function Objects - linked to Function.prototype which is itself linked to Object.prototype\n');
console.log('Every function object is also created with a prototype property. Its value is an object with a constructor property whose value is the function.')
console.log('Since functions are objects, they can be used like any other value. Functions can be stored in variables, objects, and arrays.\n')
/**
 * Since functions are objects, they can be used like any other value. Functions can be
stored in variables, objects, and arrays. Functions can be passed as arguments to
functions, and functions can be returned from functions. Also, since functions are
objects, functions can have methods.
 */



var myFun = function addd(a, b) {
    return a + b;
}
console.log(myFun(3, 5))
//console.log(addd(3,5)) //ReferenceError: addd is not defined

console.log('\nInvoking a function suspends the execution of the current function, passing control and parameters to the new function.')

console.log('\n\n 1. The Method Invocation Pattern')
console.log('When a function is stored as a property of an object or JS class, we call it a method.')
/**
 * When a function is stored as a property of an object, we call it a method. When a
method is invoked, this is bound to that object. If an invocation expression contains
a refinement (that is, a . dot expression or [subscript] expression), it is
invoked as a method:
 */
var myObject = {
    value: 10,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function () {
        return this.value;
    }
};
myObject.increment(); //argument undefined 
console.log(myObject.value); // 11
myObject.increment(2);
console.log(myObject.value); // 13
myObject.increment("iki"); //non-numeric argument 
console.log(myObject.value); // 14



console.log('\n\n 2. The Function Invocation Pattern')
console.log('When a function is not the property of an object, then it is invoked as a function:')
console.log('When a function is invoked with this pattern, this is bound to the global object. This was a mistake in the design of the language.')

var sum = myFun(45, 89); //Lodash one add
console.log(sum)
/**
 * When a function is invoked with this pattern, this is bound to the global object.
 * 
This was a mistake in the design of the language. Had the language been designed
correctly, when the inner function is invoked, this would still be bound to the this variable of the outer function. 

A consequence of this error is that a method cannot employ an inner function to help it do its work because the inner function does not
share the method’s access to the object as its this is bound to the wrong value.
 */

console.log('Fortunately, there is an easy workaround. - See, how THIS is used for Function INVOCATION')
/**
 * If the method defines a variable and assigns it
the value of this, the inner function will have access to this through that variable. By
convention, the name of that variable is that:
 */
// Augment myObject with a double method.
myObject.double = function () {
    var that = this; // Workaround.
    var helper = function () {
        that.value = myFun(that.value, that.value); ///HERE IS THE TRICK 
    };
    helper(); // Invoke helper as a function.
};
// Invoke double as a method.
myObject.double();
console.log(myObject.value); // 28
console.log(myObject.getValue); // [Function: getValue]
console.log(myObject.getValue()); // 28




console.log('\n\n 3. The Constructor Invocation Pattern - Functions that are intended to be used with the new prefix are called constructors.')

console.log('Prototypal inheritance is powerfully expressive, but is not widely understood.')
console.log('JavaScript itself is not confident in its prototypal nature, so it offers an object-making syntax that is reminiscent (look a like) of the classical languages.')
/**
 *
JavaScript is a prototypal inheritance language. That means that objects can inherit
properties directly from other objects. The language is class-free.

This is a radical departure from the current fashion. Most languages today are classical.
Prototypal inheritance is powerfully expressive, but is not widely understood.

JavaScript itself is not confident in its prototypal nature, so it offers an object-making
syntax that is reminiscent(look a like) of the classical languages.

Few classical programmers
found prototypal inheritance to be acceptable, and classically inspired syntax
obscures the language’s true prototypal nature. It is the worst of both worlds.

If a function is invoked with the new prefix, then a new object will be created with a
hidden link to the value of the function’s prototype member, and this will be bound
to that new object.

The new prefix also changes the behavior of the return statement. We will see more
about that next.
 */
// Create a constructor function called Quo.  It makes an object with a status property.
var Quo = function (string) {
    this.status = string;
    this.status2 = string;
};
// Give all instances of Quo a public method called get_status.
Quo.prototype.get_status = function () {
    return this.status;
};

Quo.prototype.myMethod = function () {
    return "You see I am defined:" + this.status2;
}
// Make an instance of Quo.
var myQuo = new Quo("Really confused");
console.log(myQuo.get_status()); // confused
console.log(myQuo.myMethod())

console.log('\nLet me call function itself')
/**
 * Functions that are intended to be used with the new prefix are called constructors. By
convention, they are kept in variables with a capitalized name. 

If a constructor is
called without the new prefix, very bad things can happen without a compile-time or
runtime warning, so the capitalization convention is really important.
Use of this style of constructor functions is not recommended. We will see better
alternatives in the next chapter.
 */
//console.log(Quo().myMethod()); //TypeError: Cannot read properties of undefined (reading 'myMethod')
// console.log((Quo("oo ezdinow")).myMethod()); //parameter must be give
console.log('You see, CONSTRUCTOR function definition is without NAME, that is why you cant use constructor as a function call')




console.log('\n\n 4. The Apply Invocation Pattern.')

console.log('Because JavaScript is a functional object-oriented language, functions can have methods.')
/**
 * Because JavaScript is a functional object-oriented language, functions can have methods.
 * The apply method lets us construct an array of arguments to use to invoke a function.
 * 
It also lets us choose the value of this. The apply method takes two parameters. The first is the value that should be bound to this. The second is an array of
parameters. 
 */

// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array); // we do not use this that is why null. add method is from Lodash 
console.log(sum)
var sum = myFun.apply(null, array); //my method
console.log(sum)

console.log('\nor another handy feature, even a field is not belong to object, we make it available via prototype, and call appropriate method with it')

// Make an object with a status member.
var myStatusObject = {
    status: 'A-OK'
};
// myStatusObject does not inherit from Quo.prototype, but we can invoke the get_status method on myStatusObject even though statusObject does not have a get_status method.
var status = Quo.prototype.get_status.apply(myStatusObject);
// status is 'A-OK'
console.log(status)



console.log('\n\nArguments - A bonus parameter that is available to functions when they are invoked is the arguments array.')
/**
A bonus parameter that is available to functions when they are invoked is the
arguments array. It gives the function access to all of the arguments that were supplied
with the invocation, including excess arguments that were not assigned to
parameters.

This makes it possible to write functions that take an unspecified number
of parameters:
 */
// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.
var summ = function () {
    var i, summ = 0;
    for (i = 0; i < arguments.length; i += 1) {
        summ += arguments[i];
    }
    return summ;
};
console.log(summ(4, 8, 15, 16, 23, 42)); // 108
/**
 * This is not a particularly useful pattern. In Chapter 6, we will see how we can add a
similar method to an array.

Because of a design error, arguments is not really an array. It is an array-like object.
arguments has a length property, but it lacks all of the array methods. We will see a
consequence of that design error at the end of this chapter.
 */



console.log('\n\n Augmenting Types')
console.log("\n\n THIS is very NICE feature (see b-object.js) - If we add a new type, property, method to a prototype, that property will immediately be visible in all of the objects")
/**
 * JavaScript allows the basic types of the language to be augmented. In Chapter 3, we
saw that adding a method to Object.prototype makes that method available to all
objects. This also works for functions, arrays, strings, numbers, regular expressions,
and booleans.

For example, by augmenting Function.prototype, we can make a method available to
all functions:

By augmenting Function.prototype with a method method, we no longer have to type
the name of the prototype property. That bit of ugliness can now be hidden.
 */
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.prototype.iMethod = function (name, func) {
    this.prototype[name] = func;
    return this;
}

console.log('e.g. JS has not Number types like in JAVA Byte, Short, Integer, Long, Float, Long. By augumenting we can solve this issue')
/**
 * By augmenting Function.prototype with a method method, we no longer have to type
the name of the prototype property. That bit of ugliness can now be hidden.

JavaScript does not have a separate integer type, so it is sometimes necessary to
extract just the integer part of a number. The method JavaScript provides to do that
is ugly.

We can fix it by adding an integer method to Number.prototype. It uses either
Math.ceiling or Math.floor, depending on the sign of the number:
 */
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((-10 / 3).integer()); // -3
console.log((13 / 3).integer()); // -3

//or JavaScript lacks a method that removes spaces from the ends of a string. That is an easy oversight to fix:
String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});
console.log('"' + " onat  ".trim() + '"');

console.log('By augmenting the basic types, we can make significant improvements to the expressiveness of the language.')
/**
 * By augmenting the basic types, we can make significant improvements to the expressiveness
of the language. Because of the dynamic nature of JavaScript’s prototypal
inheritance, all values are immediately endowed with the new methods, even values
that were created before the methods were created.


The prototypes of the basic types are public structures, so care must be taken when
mixing libraries. One defensive technique is to add a method only if the method is
known to be missing:
 */
// Add a method conditionally.
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};



console.log('\n\n  * Recursion')
/**
A recursive function is a function that calls itself, either directly or indirectly. Recursion
is a powerful programming technique in which a problem is divided into a set of
similar subproblems, each solved with a trivial solution. Generally, a recursive function
calls itself to solve its subproblems.
 */
var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc +
            ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};
hanoi(3, 'Src', 'Aux', 'Dst');

/**
 * Recursive functions can be very effective in manipulating tree structures such as the
browser’s Document Object Model (DOM).
 */


console.log('\n\n  * Scope -  JavaScript does not have block scope. JavaScript does have function scope.')
/**
Scope in a programming language controls the visibility and lifetimes of variables and
parameters. This is an important service to the programmer because it reduces naming
collisions and provides automatic memory management
 */
var foo = function () {
    var a = 3, b = 5;
    var bar = function () {
        var b = 7, c = 11;
        // At this point, a is 3, b is 7, and c is 11
        a += b + c;
        // At this point, a is 21, b is 7, and c is 11
    };
    // At this point, a is 3, b is 5, and c is not defined
    bar();
    // At this point, a is 21, b is 5
};
console.log(foo())
/**
 * Most languages with C syntax have block scope. All variables defined in a block (a
list of statements wrapped with curly braces) are not visible from outside of the
block. The variables defined in a block can be released when execution of the block
is finished. This is a good thing.

Unfortunately, JavaScript does not have block scope even though its block syntax
suggests that it does. This confusion can be a source of errors.

JavaScript does have function scope. That means that the parameters and variables
defined in a function are not visible outside of the function, and that a variable
defined anywhere within a function is visible everywhere within the function.

In many modern languages, it is recommended that variables be declared as late as
possible, at the first point of use. That turns out to be bad advice for JavaScript
because it lacks block scope. So instead, it is best to declare all of the variables used
in a function at the top of the function body.
 */





console.log('\n\n  CLOSURE -  JavaScript does not have block scope. JavaScript does have function scope.')
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




console.log('\n\n  Callbacks - callback function that will be invoked later once result is available. promotes encapsulation, security ans other design patterns')
/**
Functions can make it easier to deal with discontinuous events. For example, suppose
there is a sequence that begins with a user interaction, making a request of the
server, and finally displaying the server’s response. The naïve way to write that
would be:
 */
function prepare_the_request() { }
function send_request_synchronously(request) { }
function display(response) { }
request = prepare_the_request();
response = send_request_synchronously(request);
display(response);
/**
 * The problem with this approach is that a synchronous request over the network will
leave the client in a frozen state. If either the network or the server is slow, the degradation
in responsiveness will be unacceptable.

A better approach is to make an asynchronous request, providing a callback function
that will be invoked when the server’s response is received. An asynchronous
function returns immediately, so the client isn’t blocked
 */
request = prepare_the_request();
async function send_request_asynchronously() { } //tbd
send_request_asynchronously(request, function (response) {
    display(response);
});


console.log('\n\n  * Module - Use of the module pattern can eliminate the use of global variables.')
/**
We can use functions and closure to make modules. A module is a function or object
that presents an interface but that hides its state and implementation. By using functions
to produce modules, we can almost completely eliminate our use of global variables,
thereby mitigating one of JavaScript’s worst features.
 */
console.log('By using functions  to produce modules, we can almost completely eliminate our use of global variables, \n thereby mitigating one of JavaScript’s worst features')
/**
 * Use of the module pattern can eliminate the use of global variables. It promotes
information hiding and other good design practices. It is very effective in encapsulating
applications and other singletons.

It can also be used to produce objects that are secure. Let’s suppose we want to make
an object that produces a serial number:
 */
var serial_maker = function () {
    // Produce an object that produces unique strings. A
    // unique string is made up of two parts: a prefix
    // and a sequence number. The object comes with
    // methods for setting the prefix and sequence
    // number, and a gensym method that produces unique
    // strings.
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker();
seqer.set_prefix('Q')
seqer.set_seq(1000);
var unique = seqer.gensym(); // unique is "Q1000"
console.log(unique)
/**
 * The methods do not make use of this or that. As a result, there is no way to compromise
the seqer. It isn’t possible to get or change the prefix or seq except as permitted
by the methods. The seqer object is mutable, so the methods could be
replaced, but that still does not give access to its secrets. seqer is simply a collection
of functions, and those functions are capabilities that grant specific powers to use or
modify the secret state.
If we passed seqer.gensym to a third party’s function, that function would be able to
generate unique strings, but would be unable to change the prefix or seq.
 */



console.log('\n\n  Cascade  - like a template method, or builder pattern chain methods,.. ')
/**
 * Some methods do not have a return value. For example, it is typical for methods that
set or change the state of an object to return nothing. If we have those methods
return this instead of undefined, we can enable cascades. In a cascade, we can call
many methods on the same object in sequence in a single statement.

Cascading can produce interfaces that are very expressive. It can help control the tendency
to make interfaces that try to do too much at once.
 */






console.log('\n\n  Curry  - produce a new function by combining a function and an argument ')
/**
 * Functions are values, and we can manipulate function values in interesting ways.
Currying allows us to produce a new function by combining a function and an
argument:
 */

// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
function add2(a) {
    return function (b) {
        return a + b;
    }
}

const addTwo = add2(5);  // First function call with 5
console.log(addTwo(4));

console.log('\nCurrying with Arrow Functions')
//Arrow function can be used to make currying function short:
/**
 * How Currying Works in JavaScript?
Currying function in the JavaScript can be done manually, but it can also be done using the closure. Below it is shown that how currying function works.

Creating the First Function: The first function takes the first argument and gives back a new function to take the next one.
Returning a New Function: The returned function takes the next argument and keeps going until all the arguments are given.
Returning the Result: Once all the arguments are provided, the final result is calculated and returned.
 */
const addz = a => b => a + b;
console.log(addz(5)(4));


//or 

const test = (a, b) => b + " " + a;
test("I am arg1", " I am arg2"); // I am arg1 I am arg2

//  Currying is basically the fact of nesting returning functions and be able to partially consume a function.
const curr = (a) => (b) => b + " " + a;
let cc = curr("I am arg1")(" I am arg2"); // I am arg1 I am arg2
console.log(cc)

//const compute = (a: number, f: (x:number) => number) : number => f(a);

const square = (a) => {
    let res = a * a;
    console.log(res);
    return res;
};




console.log('\n\n  Memoization ')
/**
 * Functions can use objects to remember the results of previous operations, making it
possible to avoid unnecessary work. This optimization is called memoization.
JavaScript’s objects and arrays are very convenient for this.

This works, but it is doing a lot of unnecessary work. The fibonacci function is
called 453 times. We call it 11 times, and it calls itself 442 times in computing values
that were probably already recently computed. If we memoize the function, we can
significantly reduce its workload.
 */
var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
for (var i = 0; i <= 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci(i));
}

console.log('\n')
/**
 * We will keep our memoized results in a memo array that we can hide in a closure.
When our function is called, it first looks to see if it already knows the result. If it
does, it can immediately return it:

 */
var fibonacci2 = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }

        return result;
    };
    return fib;
}(); ///you see function is already invoked  
/**
 * 
This function returns the same results, but it is called only 29 times. We called it 11
times. It called itself 18 times to obtain the previously memoized results.
 */
for (var i = 0; i <= 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci2(i));
}
 
/**
 * We can generalize this by making a function that helps us make memoized functions.
The memoizer function will take an initial memo array and the fundamental function.
It returns a shell function that manages the memo store and that calls the
fundamental function as needed. We pass the shell function and the function’s
parameters to the fundamental function:
 */
var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};

console.log('\n')

//We can now define fibonacci with the memoizer, providing the initial memo array and fundamental function:
var fibonacci3 = memoizer([0, 1], function (shell, n) {
return shell(n - 1) + shell(n - 2);
});
for (var i = 0; i <= 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci3(i));
} 


/**
 * By devising functions that produce other functions, we can significantly reduce the
amount of work we have to do. For example, to produce a memoizing factorial function,
we only need to supply the basic factorial formula:
 */
var factorial = memoizer([1, 1], function (shell, n) {
return n * shell(n - 1);
});




/**
 * Parameters vs. Arguments
In JavaScript, function parameters and arguments are distinct concepts:

Parameters are the names listed in the function definition.

Arguments are the real values passed to, and received by the function.


Parameter Rules
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the arguments.

JavaScript functions do not check the number of arguments received.


Argument Rules
JavaScript function definitions do not specify data types for arguments.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.



The Arguments Object
JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

This way you can simply use a function to find (for instance) the highest value in a list of numbers:

The Order of Arguments Matters
Arguments are assigned to parameters in the order they appear.



Arguments Can Be Variables
Arguments do not have to be values. They can also be variables.

Missing Arguments
If a function is called with fewer arguments than parameters, the missing values become undefined.



Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

Objects are Passed by Reference
In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.


Common Mistakes - on Arguments 
Confusing Parameters and Arguments
Parameters are names.
Arguments are values.
Forgetting the Order
Arguments are assigned by position.
Missing Arguments
Use default values to avoid undefined.


Common Mistakes - on Parameters 
Forgetting Return
A function without return sends back undefined.
Expecting Code after Return to Run
Code after return is ignored.
Confusing console.log() with Return
console.log() shows output but does not return a value.
Expecting Return
If your function does not return a value, storing it in a variable will give undefined.

 */

x = findMax(1, 123, 500, 115, 44, 88);
console.log(x)
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}






/**
 * Functions vs. Function Expressions
 * 
JavaScript functions are defined with the function keyword.

JavaScript functions can be defined in different ways.

In JavaScript, function declarations and function expression refer to different ways of defining functions, their different syntax and how they are handled:

They both work the same when you call them.

The difference is when they become available in your code.

Function Declarations vs Function Expression
A function declaration (or simply a function) is defined using:

The function keyword
A function name
Parameters in parentheses
A code block brackets




Key Differences
Syntax:
Function declarations require a name. Function expressions can be anonymous.
Hoisting:
Function declarations are hoisted. Function expressions are not.
Flexibility:
Function declarations offer more flexibility in how and where they are used.

When to Use Each
Use function declarations for general-purpose functions
Use function expressions when assigning functions to variables
Use function expressions in callbacks and event handlers


Arrow Functions
The concise arrow function syntax (=>) is a modern way of writing function expressions.

Callbacks
Passing functions as arguments to other functions, such as event listeners or asynchronous operations.

Closures
Function expressions help create closures, which allow functions to remember and access variables from their containing scope.

Immediately Invoked Function Expressions (IIFEs)
Functions Expressions that run as soon as they are defined, are often used to create private scopes and avoid global variable conflicts.

 */