
/**
 * When data is created inside a variable, the variable points toward that data, rather than containing it. 
 * 
 * When we’ve used array methods earlier in this chapter,
 *  we seemed to modify the original array. For example, using splice on an array changes its value when we try to console log it:
 * 
 * 
 * 
 * Here:
the underlying “DATA” is the “value.” Then myArr and newArr are both references to that data
 */
let myArr = [ "banana", "apple", "squid", "cake" ]
myArr.splice(0, 2)
console.log(myArr) // [ "banana", "cake" ]

console.log("\n")

/**
 * This seems to make a lot of sense. The variable myVar has changed, so of course, the original data should be different. 
 * However, things begin to get tricky when you put the splice into another variable. 
 * When we do that, you’ll find that the two variables have different values on the console log:
 * 
 * Shouldn’t an update to myArr using splice cause the original value to change too so that both myArr and newArr are the same? 
 * In practice, it doesn’t work that way, and the reason why is actually another JavaScript quirk.
use any array method. That means you have two “references,” which point to the same underlying data. To visualize this, see Figure 3-9.

While the values stored in myArr and newArr are now different, they still reference the same underlying data. 
The data in the reference is different since it has been changed by the slice method.
Since we stored the slice output on a variable, the underlying data never changed. This can make it seem like 
both variables are working independently, but they are not!
 */
myArr = [ "lightning", "search", "key", "bolt" ]
let newArr = myArr.slice(2, 3);
console.log(myArr); // [ "lightning", "search", "key", "bolt" ]
console.log(newArr); // [ "key" ]

console.log("\n")
myArr = [ "lightning", "search", "key", "bolt" ]
newArr = myArr.slice(2, 3)
newArr[2] = "lightning"
console.log(myArr) // [ "lightning", "search", "key", "bolt" ]
console.log(newArr) // [ "key", empty, "lightning" ]



console.log("\n The solution to avoid this problem entirely is to create a “deep copy” of the original.")
let myArray = [ 1, 2, 3, 4 ];
let deepCopy = structuredClone(myArray);
console.log(myArray) 

/**
 * Deep copies give you certainty. In the previous example, if you apply any methods to deepCopy, it will 
 * only affect deepCopy. The function, structuredClone, can be used on any object or array to ensure 
 * it is a deep copy rather than a shallow one.
 */




console.log("\n")
