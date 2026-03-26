

console.log("--Object Mutability ---")

/**
 * Object Mutability
As we’ve discussed previously, objects are mutable even if contained within a const variable. 
We can update any key on an object to something else by using an equals sign to set it to something completely different:
 */
let myObject = {
    "key": "value",
    "someKey": 5,
    "anotherKey": true
}
// Let's update one of the keys on myObject
myObject["key"] = "NEW VALUE"
console.log(myObject)
console.log(myObject["key"]) // shows 'NEW VALUE'

//Adding new keys can also be achieved by directly defining them in code, as shown in the following example:
// Let's update one of the keys on myObject
myObject["aNewKey"] = "Some Value"
console.log(myObject)
console.log(myObject["aNewKey"]) // shows 'Some Value'

//Objects may also contain other objects within them, and these can be accessed via multiple square brackets or using the dot notation if you prefer:
myObject = {
    "key": {
        "key": 5,
        "newKey": "value"
    },
    "someKey": 5,
    "anotherKey": true
}
console.log(myObject['key']['newKey']) // shows 'value'
console.log(myObject.key.newKey) // shows 'value'



console.log("\n-- Non-mutable objects---By default, all of these properties are true.")


/**
 * Non-mutable objects
The only time an object’s mutability changes is if you change it yourself. All objects have three hidden properties that configure their mutability along with their value:
•
Writable – True if the property’s value can be changed, false if it is read-only.
•
Enumerable – True if the property will be shown in loops, false if it won’t be.
•
Configurable – True if the property’s value can be deleted or modified, false if it cannot.

By default, all of these properties are true. Some useful utility methods exist to change these properties. 
For example, you can change an object to read-only by using 

Object.freeze, 
after which no property changes will
affect the object. In practice, all this does is sets the object to { writable: false, configurable: false }.

Object.seal, will instead set an object to { configurable: false }. 
This means existing properties can be changed but not delete, and new ones cannot be added.
 */


console.log("\n--  Spread Syntax or the “Three Dots” ")
/**
 * The spread syntax can do four things:
 * 
1. Merging arrays
2. Merging objects
3. Coercing arrays into objects
4. Passing arrays as arguments to functions
 */
let animals1 = [ "cats", "dogs"]
let animals2 = [ "pigeons" ]
let allAnimals = [ ...animals1, ...animals2 ]
console.log(allAnimals) // [ "cats", "dogs", "pigeons" ]

//Objects can also be merged in the same way – but if duplicate keys are found, the second object will overwrite the first:
let user1 = { "name" : "John", age: 24 }
let user2 = { "name" : "Joe" }
let combineUsers = { ...user1, ...user2 }
console.log(combineUsers) // { "name" : "Joe", age: 24 }


//Using the spread syntax on an array inside of an object literal will turn it into an object, too – where the keys are the 
//indices of the array. This provides a simple way to convert an array to an object:
let animals = [ "cats", "dogs"]
let objectAnimals = { ...animals }
console.log(objectAnimals) // {0: 'cats', 1: 'dogs'}

