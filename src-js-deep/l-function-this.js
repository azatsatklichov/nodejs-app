console.log(this) // Window { }
let words = function (word1, word2) {
console.log(this) // Window { }
return word1 + " " + word2
}


/////

"use strict"
console.log(this) // Window { }
let words2 = function (word1, word2) {
console.log(this) // undefined
return word1 + " " + word2
}

/**
 Arrow Notation Functionality with this
Now that we’ve looked at how different contexts work with functions, 
let’s go back to arrow notation functions. Arrow functions are a little 
different from other functions in that they do not have their own context. 
That means that even in strict mode, they inherit it from their parents. 
This functionality only really makes sense in strict mode:
 */
/////
"use strict"
console.log(this) // Window { }
let words3 = () => {
console.log(this)
}
words3() // console logs Window { }

/**
 * If your arrow function is inside another function, which is not using arrow notation,
 *  it inherits the context from that parent function. This can be seen in the following example:
 */

console.log('==========================')
"use strict"
let contextualFunction = function() {
let words = () => {
console.log(this) // console logs undefined, because in strict mode, this has been undefined inside functions.
}
words()
}
contextualFunction() // console logs undefined
//In general, strict mode is a more reliable way to write code.