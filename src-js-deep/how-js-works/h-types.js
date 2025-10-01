
/**
 * Primitives, and references, and function calls live in STACK
 * 
 * objects and function definition  live in HEAP
 */

console.log(typeof 5) // 'number'
console.log(typeof "name") // 'string'



console.log('\n//Primitive Types')
//number
let x = 5 //Any numeric value



//string
let s = "Orazmyrat"


//bigint - Any integer which is defined as bigint (has an n after the integer). 
// Used for creating safe integers beyond the maximum safe integer limit
let big = 1000n

//undefined - Any undefined data (i.e., a variable with no value)
let u = undefined

//null - a reference that points to a nonexistent address in memory
let nul = null
console.log('null is not an object, but typeof null returns object as its type. Tthis is a long-standing \nbug in Javascript, but it cannot be fixed because it would break too many code bases.')


//boolean - true or false value
let boo = true


//symbol - guaranteed unique identifier
let id = Symbol("id")


console.log('\n//Primitive Wrappers')
//Using Wrapper types, but without NEW 
/**
 * Every primitive type except for null and undefined are associated with what are 
 * known as wrapper objects, which are referenced every time you try to call a method 
 * on a primitive type. 
 * As an example, the wrapper object for string types is called String.
 * 
 * 
 * The wrapper objects for common JavaScript types are as follows:
        –
        –
        Object
        –
        –
        Symbol
        –
        –
        Number
        –
        –
        String
        –
        –
        BigInt
        –
        –
        Boolean

        If you ever need to know what methods are available to various types, you can find them
         by console logging Wrapper.prototype, where Wrapper is Object, Symbol, Number, etc.
 */
let someVariable = 'string'
console.log(someVariable.at(1)) // 't'
console.log('string'.at(2)) // 'r'
console.log(String.prototype)

/**
 * This applies to all types, so the methods found on Object.prototype
 *  can be applied directly to any Object. The only slight quirk to this is that
 *  if you want to apply a number method to a Number type, you have to 
 * wrap the number in brackets.
 * 
 * 
(5).toString() // '5'
5..toString() // '5'
Number.toString(5) // '5's

 */

console.log((5).toString()) // '5'
console.log(5..toString()) // '5'
//Number methods can also be called via Number.toString().
console.log(Number.toString(5)) // '5'


/**
 * Another thing worth noting is that primitive wrappers can sometimes define static 
 * methods and properties that can be called directly on the wrapper itself.
 */
console.log(Number.MAX_SAFE_INTEGER)

//As another example, the static method keys() can be found on the Object wrapper, and can be called to get the keys of any Object:
let keys = Object.keys({ "w": "world", "b": "world" })
console.log(keys)




console.log('\n//Using Wrappers to Create Types (REMEMBER no NEW used here)')
let newString2 = String("hello") // "hello"
console.log(newString2)

let objString = String({ "some": "object" }) // "[object Object]"
console.log(objString)
newString2 = String(5) // "5"
console.log(newString2)
let newNumber = Number("5") // 5 - same works for numbers, which coerces numerical strings into numbers
console.log(newNumber)

//BUT here we create OBJECTS 
let newString3 = new String("hello") // String { "hello" }
console.log(newString3)

let newNumber3 = new Number(5) // Number { 5 }
console.log(newNumber3)
console.log('The behavior of using these primitive wrappers as constructors is quite unreliable')



console.log('\nThe Number Type and NaN')
/**
 * We’ve already spoken about null and undefined, which represent something 
 * with no value or something which is undefined. Another value, NaN, can also appear in 
 * your code if you try to create a number out of something that is clearly not a number.
 */
parseInt("5") // the Number 5
parseFloat("56.3") //number 
parseInt({ "key": "value" }) // NaN
console.log('Parsing an object or something that is \nnot easily coerced to a number returns NaN or “Not a Number.” NaN is a global property.')


console.log('NaN has some weird behavior.')
//The reason NaN behaves this way is defined in a specification called IEEE 754.
//In a way, having NaN not equal itself makes some sense. 
// If it did, then NaN/NaN would equal 1, which would be a number.
console.log(NaN === NaN) // false,  this is understandable, infinity/infinity = infinity
console.log(5 === 50) // true


//NaN is not an object.
console.log('While it may seem logical to assume that it does not equal itself because it’s an object with a different reference')
console.log('BUT - NaN is not an object. It has type NUMBER')
console.log(typeof NaN) // "number"


console.log('The confusion does not stop there.')
/**
 * If something is NaN, this function returns true. If something is of type number, 
 * it will tell you if it’s NaN or not. If something is another type, it will 
 * coerce that data to a 
 * number and then tell you if it’s a number – and some of those conversions are unexpected.
 */
isNaN(5) // false
isNaN(NaN) // true

//For example, boolean values like true and false become 1 and 0.
isNaN(" ") // false
isNaN(NaN) // true
isNaN(false) // false - boolean values like true and false become 1 and 0
isNaN(true) // false - both return false even though true and false are not numbers
isNaN([5]) // false

//To fix this, JavaScript added a new method later on, 
// which does not coerce data into numbers if it wasn’t a number in the first place
//Number.isNaN(), instead of isNaN()
/**
 * So while isNaN("hello") is false since Number("hello") converts to NaN, 
 * Number.isNaN("hello") is false since "hello" is not equal to “NaN.” 
 * As such, Number.isNaN is a much more reliable way to check if something 
 * is NaN since no type coercion is involved – but it only checks for direct 
 * equality to NaN itself.
 * 
 * 
 * isNaN() coerces types to numbers. For example, isNaN("hello") will 
 * perform Number("hello") which results in NaN, and this will return true.
 * 
 * Number.isNaN() will not coerce types to numbers. 
 * It will return false when asked Number.isNaN("hello") since “hello” does not equal NaN.
 * 
 */


console.log('\nNumber Type Mathematics')
/**
 * Number.MAX_SAFE_INTEGER, 
 * but the Number wrapper object does not contain mathematical constants,
 * Instead, JavaScript has another global object called Math, 
 * also some methods. 
 * 
 *  
 */
let p = 5 * Math.PI // 5 times Pi
let y = 10 * Math.E // 10 times e - Euler's number

let a = Math.abs(-5) // 5  
Math.floor(2.78764) // Rounds down a number, so Math.floor(2.78764) returns 2.
Math.ceil(2.2344) // Rounds up a number, so Math.ceil(2.2344) returns 3.

Math.round(2.2344) //Rounds a number as per normal rounding rules. So Math.round(2.5) returns 3, and Math.round(2.2) returns 2.



console.log('\n//The Date Type')
let currentDateCurrent = Date() // The current date - wrapper object called Date,
console.log(currentDateCurrent)
let currentDate = new Date() // Date Object
console.log(currentDateCurrent)
/**
 * Lack of specific primitive “Date” type in JavaScript, unlike in other languages.
 */
let date = new Date().getTime() //to convert this to the unix timestamp in milliseconds




console.log('\nSymbol Type')
/**
 * Symbols allow for the creation of unique keys which are unique regardless of their name, 
 * allowing you to avoid key conflicts when adding new items to objects
 */

//To access this iteration,
let myArray = ["apple", "squid", "speaker"]
let getIterator = myArray[Symbol.iterator]() //This iterator property utilises symbols. Symbols are special primitives which always guarantee a unique value.
console.log(getIterator)

//Imagine, for example, you had a specific property on an object called “id,” which you did not want changed.
let myObject = { "id": "some-id" }
myObject.id = "some-other-id"

//This can be AVOIDED using symbols 
let idSymbol1 = Symbol("id")
let idSymbol2 = Symbol("id")
let myObject4 = {
    [idSymbol1]: "some-id", [idSymbol2]:
        "some-other- id"
}
console.log(myObject4[idSymbol1]) // "some-id"
console.log(myObject4[idSymbol2]) // "some-other-id"

/**
 * While the preceding code has allowed us to create unique values using the Symbol constructor, 
 * you can still create unique keys with symbols that do override each other. Symbol.for()
 */
let idSymbol1z = Symbol.for("id")
let idSymbol2z = Symbol.for("id")
let myObjectz = {
    [idSymbol1]: "some-id", [idSymbol2]:
        "some-other- id"
}
console.log(myObjectz[idSymbol1]) // "some-other-id"
console.log(myObjectz[idSymbol2]) // "some-other-id"

/**
 * Symbol.keyFor() is the opposite of Symbol.for(), 
 * and it allows you to retrieve the text value of the symbol key:
 */
let someSymbol = Symbol.for("id")
let getSymbolKey = Symbol.keyFor(someSymbol)
console.log(someSymbol) //Symbol(id)
console.log(getSymbolKey) // id 



console.log('\nTruthy and Falsy Operators')
//Logical AND Operator
let xl = 5
if (xl > 0 && xl < 10) {
    console.log("hello world")
}

//Logical OR Operator
let someValue = 5
let xi = 0 || "hello world" // "hello world", since 0 is falsy



//Nullish Coalescing 
// Nullish coalescing, which is indicated by the ?? operator
//will only return the second part of a statement if the first is null or undefined
let xn = undefined ?? 0 // returns 0
let yn = false ?? 0 // returns false
let zn = x === 0 ?? 1 // returns true, since x does = 0.
let an = '' ?? true // returns true, since '' is not null or undefined (it is falsy)
let bn = null ?? 5 // returns 5, since null is null or undefined

//we can also chain opeartors
let xlg = true && 0 && false


//Optionality
//if(userObject?.address?.locale?.city)




