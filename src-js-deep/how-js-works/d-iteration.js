
/**
 * Object is not iterable
 * 
 * Iteration Protocol
In the previous chapter, we discussed how different data types, like arrays, inherit from a prototype. This is called prototypical inheritance.
new Array() or the square bracket notation, we are making a new instance of Array, which inherits many methods and properties from Array.prototype. 
Any data type, like arrays or strings, which have iterability, will inherit a property called 

Symbol.iterator from their prototype chain. This is known as the iteration protocol.
 */

let myArray = [ "lightning", "apple", "squid", "speaker" ]
let getIterator = myArray[Symbol.iterator]()
console.log(getIterator)
console.log(getIterator.next()) // {value: 'lightning', done: false}

myArray = [ "lightning", "apple", "squid", "speaker" ]
getIterator = myArray[Symbol.iterator]()
console.log(getIterator.next()) // {value: 'lightning', done: false}
console.log(getIterator.next()) // {value: 'apple', done: false}
console.log(getIterator.next()) // {value: 'squid', done: false}
console.log(getIterator.next()) // {value: 'speaker', done: true}
console.log(getIterator.next()) // {value: undefined, done: true}


console.log("-- Objects Are Not Iterable by Default --") ;
/**
 * If you try to console log Object.prototype, you’ll find no Symbol.iterator property, which implies objects are not iterable. 
 * The main reason why objects are not iterable by default is because they contain both keys and values. Deciding which to iterate 
 * upon or how to format that iteration is something that JavaScript leaves to you.
Fortunately, there is an easy way to iterate through an object, and that is to convert it to an iterable data type, like an array. 
There are three methods to do this:
•
Object.keys(), which extracts all keys as an array
•
Object.values(), which extracts all values as an array
•
Object.entries(), which extracts all keys and arrays as an array of key–value pairs
 */
let myObject = {
firstName: "John",
lastName: "Doe",
age: 140
}

let myObjectKeys = Object.keys(myObject)
console.log(myObjectKeys) //[ "firstName", "lastName", "age" ]

let myObjectEntries = Object.entries(myObject)
for(const [key, value] of myObjectEntries) {
console.log(`The key ${key} has a value ${value}`)
} 