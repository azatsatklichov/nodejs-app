
console.log("\n-- Prototype-Based Programming ")

/**
Prototype
Every object is linked to a prototype object from which it can inherit properties. All
objects created from object literals are linked to Object.prototype, an object that
comes standard with JavaScript.
When youmake a new object, youcan select the object that should be its prototype.
The mechanism that JavaScript provides to do this is messy and complex, but it can
be significantly simplified. We will add a create method to the Object function. The
create method creates a new object that uses an old object as its prototype. There
will be much more about functions in the next chapter. 

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () { };
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);
 */


/**
 
 * 
 * Prototype-Based Programming
When we started this chapter, we mentioned that all arrays have the method .at(). The reason for this is that arrays are created by initiating a new instance of 
an array via new Array(). When a new instance of an array is made, it inherits all properties and methods of the Array object, which includes .at().
 
 
Inheritance in JavaScript happens via something we call prototypes, a special part of all objects that allows for inheritance. 
 
While other languages
use classes and object-oriented programming, the most common paradigm in JavaScript is the use of prototypes. 
 
This type of programming is called prototype-based programming.
 */

let myArray = ["one", 2, "three", "four"]
let arrayLength = myArray.length
console.log(myArray.at(-1)) //four

/**
 * But how do all arrays “inherit” the .at() method? Well first, it’s important 
 * to remember that we said square brackets act as “syntactic sugar” for the array constructor:
 * 
 * [in JAVA all classes inherits methods from Object - class]
 * 
 * Here, we are telling JavaScript we want to make a new instance of the Array object. 
 * Since array is just a predefined object in JavaScript, it already has its own prototype.
 * 
 * console.log() on Array.prototype to find all the methods that exist on the Array object – which are inherited by all arrays.
 */
console.log(Array.prototype)

/**
 * Although so far we’ve been talking about arrays, the same is true for all objects. 
 * Since all objects are new instances of a standard “object” type, you can find all standard object methods by using console.log(Object.prototype).
 */
console.log(Object.prototype)



console.log("\n-- Prototypical Inheritance” ")
myArray = ["one", 2, "three", "four"]
console.log(myArray.at(-1)) // shows 'four'
/**
 * This may seem strange, since this method exists on Array.prototype, not Array. 
 * So given what we know about how we access objects, shouldn’t the preceding code be myArray.prototype.at(-1)?
 */
//console.log(myArray.prototype.at(-1)) //produce an error: TypeError -  Cannot read properties of undefined (reading 'at')

/**
 * When we write myArray.at(-1), JavaScript does the following:
 
1. Checks the object, myArray, for the property at.
2. If it doesn’t exist, checks the object myArray’s prototype for the property.
3. If it still doesn’t exist, checks the object myArray’s prototype’s prototype for the property.
4. Keeps doing this until no more prototypes exist, at which point it will return undefined.
 
myArray.at(-1) works, but it doesn’t exactly explain why myArray.prototype.at(-1) work.
 
The reason for this is that myArray.prototype is undefined.
 
If you try console logging a new array, you’ll find a [[Prototype]] property, but no prototype property. 
Since arrays inherit these methods in a special prototype section and not on the object itself
 */
console.log(myArray.prototype) //undefined




console.log("\n-- [[Prototype]] vs. prototype (and __proto__) ")
/**
 * [[Prototype]] vs. prototype (and __proto__)
The reason why myArray.prototype is undefined is because prototype methods and properties which are inherited exist on a special, hidden property called [[Prototype]].
 
When we create a new instance of array, it points this new array’s [[Prototype]] to the Array constructor’s Array.prototype.
 
__proto__ to further confuse matters. You will find this when trying to console logging Object.prototype. 
 
You may have thought, “That is oddly similar to prototype,”
 and you wouldn’t be wrong that the two are related. 
 
 The __proto__ property is actually just a way to access the underlying [[Prototype]] of an object.
 
 In summary: 
 -----------
• The prototype property found on array and object is a set of all properties inherited onto arrays and 
objects [[Prototype]]s when we make new instances of them (with array or object literal notation, or new Array/Object()).
 
• The [[Prototype]] is a hidden property, which exists on all objects and can be seen by using console.log(). 
When you make a new instance of an Array or Object, the [[Prototype]] of that new instance points toward the prototype property of Array/Object.
 
 
• The __proto__ property is a deprecated way of accessing an objects [[Prototype]]. 
It is strongly discouraged and is not implemented the same in every browser or JavaScript engine.
 
 */
console.log(Object.prototype) //where you can see the __proto__ property



