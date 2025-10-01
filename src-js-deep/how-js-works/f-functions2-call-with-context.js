

///Calling Functions with Context
/**

There are three methods inherited by all functions via prototypical inheritance, which allow us to call functions with a custom this context. These are listed below:

1. call(), which calls a function and gives it some context. Using call() can both define a context for a function and also pass variables to it (separated by commas).

2. apply(), which is the same as call() but uses an array to define the arguments of a function.
The apply method lets us construct an array of arguments to use to invoke a function.
It also lets us choose the value of this.

3. bind(), which permanently binds some context to a function – so you never have to redefine its context again.
*/


//call(). Suppose we want to define a constant value which is available within a specific function. 
// We can achieve this functionality by adding our constant to the function’s context
"use strict"
let words = function (word, punctuation) {
    return this.keyword + " " + word + punctuation + this.ola.vila
}
let wordContext = { keyword: "Hello", ola: { vola: "vOLA", vila: "vILA" } }   ////CONTEXT
let helloWorld = words.call(wordContext, "World", "!")
console.log(helloWorld) // Hello World!vILA


//Similar to the example above, apply() works in essentially the same way, 
// with the only difference being that arguments are defined in an array. With apply, the code would look like this instead:
let words2 = function (word, punctuation) {
    return this.keyword + " " + word + punctuation + this.ola.vila
}
let helloWorld3 = words2.apply(wordContext, ["World", "!"])
console.log(helloWorld3) // Hello World!vILA

console.log('-- ')
let add = function (a, b) {
    return a+b;
}
// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array); // sum is 7
console.log(sum) 


// Make an object with a status member.
var statusObject = {
status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
//var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'
console.log('-- ')

//**
//calling repetaedly makes an issue, in above two

// If we were calling words() all the time, we’ll find that we will have to
// keep mentioning our context over and over again – which is not ideal. */
"use strict"
words = function (word, punctuation) {
    return this.keyword + " " + word + punctuation
}
wordContext = {
    keyword: "Hello"
}
helloWorld = words.call(wordContext, "World", "!")
let goodbye = words.call(wordContext, "Goodbye", "!")
console.log(helloWorld) // "Hello World!"
console.log(goodbye) // "Hello Goodbye!"




///solution, use bind()
/**
 * Using bind(), we only ever mention our context once, and then it permanently becomes entangled with our function. This can be seen in the following example:
 */
"use strict"
words = function (word, punctuation) {
    return this.keyword + " " + word + punctuation
}
wordContext = {
    keyword: "Hello"
}
let boundWord = words.bind(wordContext)  //if not assigned let, causes an issue: ReferenceError: boundWord is not defined
helloWorld = boundWord("World-bind", "!")
console.log(helloWorld) // Hello World-bind!
goodbye = boundWord("Goodbye-bind", "!")
console.log(goodbye) // Hello Goodbye-bind!
