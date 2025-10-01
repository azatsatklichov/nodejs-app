

///Functions and the “this” Keyword

/**
At the top level of your code, outside of any functions, the context is “global,”. 
When we use the “this” keyword in the global context on browsers, it refers to an object called window.

*/

//console.log(window) // Console logs window object, in browser WINDOW
console.log(this) // Console logs window object


/**
 * Given what we’ve said so far, when we call the this keyword 
 * inside a function, you might expect the this keyword to refer to the context of the function, but you’ll find that it still shows the global this object:
 */
console.log(this) // Window { }
let words = function (word1, word2) {
    console.log(this) // Window { }  //you see here WINDOW, in sloppy mode 
    return word1 + " " + word2
}


///Sloppy Mode
/**
 * When we write JavaScript code, by default, all code is usually written in something called “sloppy mode,” which accommodates 
 * for novices by ignoring some errors and causing functions to inherit the global context. 
 * 
 * To exit sloppy mode, we have to switch to something called “strict” mode.s
 */


//STRICT mode
/**
 * Strict mode brings many advantages to your code, the main one being separating out function contexts from the global context. 
 * Both files and functions can be made strict by adding the “use strict” text at the top.
 */
"use strict"
console.log(this) // Window { }
words = function (word1, word2) {
    console.log(this) // undefined,  it has no WINDOW here 
    return word1 + " " + word2
}



///ARROW function with this
//it has no context, so it inherits THIS from parent, so window for example
"use strict"
console.log(this) // Window { }
words = () => {
    console.log(this)
}
words() // console logs Window { }


/**
 * If your arrow function is inside another function, which is not using arrow notation, 
 * it inherits the context from that parent function. This can be seen in the following example:
 */
"use strict"
let contextualFunction = function () {
    let words = () => {
        console.log(this) // console logs undefined
    }
    words()
}
contextualFunction() // console logs undefined




//In general, strict mode is a more reliable way to write code.
