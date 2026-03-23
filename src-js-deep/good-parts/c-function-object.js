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
