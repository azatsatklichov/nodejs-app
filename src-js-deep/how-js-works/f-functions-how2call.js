

///JS is approching to TS,  resolves types, has classes, and coming more
//so it is matter of when we get rid off TS ;),  I told it last year, today is 30.9.2025

/**
 * Classes came later to JavaScript, but they are largely just syntactic sugar for prototype-based inheritance
 * 
 * As with all things in software development, it doesn’t really matter if you decide to use classes, 
 * or depend on prototypical inheritance with functions. 
 * The important thing is that you are consistent throughout your projects.
 */



//Introduction to Functions
/**
 * 
A typical function consists of three parts:
1. An input, known as arguments (although sometimes, no input is given)
2. Some code to either manipulate those inputs or perform some kind of action.
3. An output, usually related to the input. It doesn’t have to be, but it’s better if it is.
 */

function myFunction() {
    return "Hello World"
}
console.log(myFunction())

console.log(myFunction("no arg")) //You see, JS is not forcing not to provide argument 

/**
 * Arguments are added inside the function declaration, within the round () brackets. 
 * Arguments then act as variables within the scope of the function. 
 * For example, the following function creates a sentence composed of two parts. 
 * Although not particularly useful in practice, it gives you a sense of how arguments work:
 * 
 * 
 * You see, JS is not forcing you to provide argument, even exists.
 * 
 * Even though they are called this, we can provide multiple words, and JavaScript won’t mind. 
 * 
 * 
 * This has its advantages, in that it’s simpler, but also its disadvantages. 
 * For example, what if you were expecting only words in your function, but numbers or objects were given instead? 
 * This makes naming and control statements like if...else 
 * within functions more important in JavaScript than in other languages.
 */

function words(word1, word2) {
    return word1 + " " + word2
}
console.log() // ""
console.log(words("Hello")) // Hello undefined
console.log(words("Hello", "John")) // Hello John
console.log(words("Hello", "Jake")) // Hello Jake
console.log(words("Good bye", "Alice")) // Good bye Alice


/**
 * Note Functions are of type object – so when we declare them, their data is stored in the heap. Hhowever, calling them will add them to the call stack like variables.
 * Functions are added to the top of the stack as they are declared – just like variables
 */


//Running Arguments with the “Three Dots”
/**
 * This is really useful in the real world, where we often have data stored in arrays and objects, which we then want to pass to functions. 
 */
function words(word1, word2) {
    return word1 + " " + word2
}
let validWords = ["Hello", "John"]
console.log(words(...validWords)) // Hello John



//Alternative Ways to Call Functions

//a1. Unnamed Function Expressions
//Unnamed function expressions are confusingly named since they do have a name – but the name is expressed via variable.
let wordsf = function (word1, word2) {
    return word1 + " " + word2
}
console.log(wordsf("Hello", "World"))

//a2: We can also put functions like this inside objects, allowing us to group functions together or add methods to a prototype:
let wordFunctions = {
    words2: function (word1, word2) {
        return word1 + " " + word2;
    }
}

console.log(wordFunctions.words2("Hello", "World"));



//b. Anonymous Functions - IIFE
/**
 * Anonymous functions (also sometimes referred to as Immediately Invoked Function Expression or IIFEs) are 
 * functions that actually are unnamed and are called immediately. To make it run immediately, 
 * we wrap it in round brackets and call it with double round brackets as before:
 */

x = (function(word1, word2) {
return word1 + " " + word2
})("Hello", "World - IIFE");

console.log(x);


(function(word1, word2) {
  console.log(word1 + " " + word2)
})("Hello", "World - IIFE");



//c. Functions with Arrow Notation - Fat function, or Lambdas
//The arrow notation is called as such because it uses => to indicate where the body of the function begins.
let wordsl = (word1, word2) => {
return word1 + " " + word2
}
console.log(wordsl("Hello", "John")) // Hello John