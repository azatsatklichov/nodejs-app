let myObject = {
    "key": "value",
    "someKey": 5,
    "anotherKey": true
}
console.log("-- Accessing Object Data --")
console.log(myObject["key"]) // shows 'value'




/**
 * The curly brackets {}, are known as the “object literal” 
 * notation – so as you’d expect, it is the equivalent of writing “new Object” (just like for Arrays).
 * 
 * Since objects have keys, however, if we want to use the constructor to define an object, we need to 
 * write all the keys and values out separately and attach them to the object, making the object literal notation infinitely easier to use.
 */
// Objects defined without the object literal notation
// are harder to define, since we need to define each
// key separately.
myObject = new Object()
myObject.key = "value"
myObject.someKey = 5
myObject.anotherKey = true



console.log("-- The Dot Notation vs. Square Brackets with Objects --")
console.log(myObject.key) // shows 'value'
/**
 * When we use square brackets, we must use quotation marks if the key is a string ("key", not key), but the same is not true for the dot notation.
As an example of this, consider the following code. With square brackets, the keyName variable is used if we omit the quotation marks. 

However, when using the dot, JavaScript
 will look for a key on myObject called keyName, which of course, returns undefined. Therefore, both square brackets and dot notation 
 have different utilities when accessing objects:
 */
let keyName = "key"
console.log(myObject[keyName]) // shows "value"
console.log(myObject.keyName) // shows undefined, because it is: myObject."key"  not key



console.log("\n--Destructuring Objects---")
const myObj = {
z: 5,
y: 4,
x: 3
}
const { x, y } = myObj
console.log(y) // 4

//provide default value
myObj2 = {
z: undefined,
y: 4,
x: 3
}
const { z = 5 } = myObj2
console.log(z) // 5


//The variable names you use when destructuring must match the property names, unless you are destructuring an array. In that case, you can call your variables anything you like:
const [a, b ] = [1, 2]
console.log(a) // 1

//thre dots - You can unwrap a set of objects together using the three dots operator, as shown in the following example
const myObj3 = {
zz: undefined,
yy: 4,
xx: 3
}
const { xx, ...rest } = myObj3
// Only shows zz and yy: { zz: undefined, yy: 4 }
console.log(rest) 

