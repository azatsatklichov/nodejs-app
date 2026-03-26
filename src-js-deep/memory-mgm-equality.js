
/**
 * JS also uses STACK and HEAM memory. 
 * 
 * All objects are kept in HEAP (if created with new XYZ(), or new function()..)
 * Note Functions are of type object – so when we declare them, their data is stored in the heap. Hhowever, calling them will add them to the call stack like variables.
 * 
 * All references and primitives, methods are kept in STACK. 
 * 
 * Difference with JAVA here is in JAVA references (if they are member variable) then 
 * they also kept in HEAP. Only references in method kept in STACK. 
 * 
 * 
 * 
 * Computers have a fixed amount of RAM. Since JavaScript stores data in RAM, 
 * the amount of data your JavaScript uses impacts the amount of RAM used on your computer or server.
 * 
 * So if the heap and stack are both stored in RAM, and they’re both used for storing JavaScript data, what’s the difference?
 * 
• The stack is a scratch space for the current JavaScript thread. JavaScript is typically single-threaded, 
so there is usually one stack per application. The stack is also limited in size, which is why numbers in JavaScript can only be so big.


• The heap is a dynamic memory store. Accessing data from the heap is more complicated, 
but the heap is not limited in size. As such, the heap will grow if needed.


The heap is used by JavaScript to store objects and functions. For simple variables composed of numbers, strings, 
and other primitive types, the stack is typically used instead. The stack also stores information on functions which will be called.
 */


//Each new variable of non-object type will appear as a new reference and value on the stack
let myNumber = 5
let newNumber = myNumber


setTimeout(function() {
console.log("Hello World")
}, 1000)
/**
 * setTimeout accepts two arguments – a callback function and a time in milliseconds, which are processed by the Web API. 
 * Most Web APIs accept a callback function, which is run on the Web API stack. 
 * This means that setTimeout is removed immediately from the main stack and only comes back to the main stack again once it has been processed.
 * 
 * When the callback is finished, the result is added back to the main stack, and this is
 *  mediated by something called the event loop, which decides when to add tasks to the main thread.
 * 
 * 
 */


//HEAP
/**
 * The Heap
When we looked at objects, we covered how we can copy objects by making “deep” and “shallow” copies of them. 
The reason we have deep and shallow copies in JavaScript is because of how objects are stored in the heap.
While non-object types are stored in the stack only, objects are thrown into the heap, which is a more dynamic 
form of memory with no limit. This means that large objects will never exceed the stack limit.
 */

let userOne = { name: "John Schmidt" }
let userTwo = userOne


/**
 * Object and Reference Equality
 * 
The final complexity that JavaScript introduces by using this method of storing objects and non-objects is to do with equality.
 JavaScript actually has a lot of difficulty comparing 
the values of two different objects, and it’s basically down to stacks and heaps. To understand why, consider the following code:
 */
myNumber = 5
newNumber = 5
let newObject = { name: "John Schmidt" }
let cloneObject = { name: "John Schmidt" }
let additionalObject = newObject

console.log(myNumber === newNumber) // TRUE, both are primitives, and in STACK 
console.log(newObject === additionalObject) // TRUE, both objects are in HEAP, and reference to SAME object 
console.log(newObject === cloneObject) // False, both objects are in HEAP, BUT references to OTHER object, that is why not same 


//JS is problematic when dealing with EQUALITY
//Comparing Object Equality
/**
 * So how do you compare object equality for objects with different references in JavaScript? Well, it’s not easy, and there is no built-in way to do it. Instead, you have the following options:
 * 
1. You can write your own function to compare each key and value in an object individually or find a good example online.

2. In Node.js, which we will not be covering in a lot of detail in this book, you can use the built-in assert.deepStrictEqual(obj1, obj2) function to compare two objects.

3. Finally, although it’s not recommended, you can also convert both objects to strings using JSON.stringify() to compare their values. JSON.stringify will turn any object into a string, which
Cha 5 RefeRenCeS, VAlueS, And MeMoRy will be stored on the stack. Then, if both strings are the same, you can assume equality. This is not advised since this JSON method also 
removes some types of data from objects, like functions. Therefore, you cannot be sure that it will always test for equality, making it quite unreliable.
 */




