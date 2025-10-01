


console.log('\nThe Number Type and NaN')

/**
 * NaN
The value NaN is a special quantity defined by IEEE 754. It stands for not a number,
even though:
 */

console.log(typeof NaN === 'number') // true 
console.log(isNaN(NaN)) //true, says not a number, BUT  type is true
console.log()
console.log()

NaN === NaN // false
NaN !== NaN // true

+ '0' // 0
+ 'oops' // NaN
isNaN(NaN) // true
isNaN(0) // false
isNaN('oops') // true
isNaN('0') // false


/**
 * 
The isFinite function is the best way of determining whether a value can be used as
a number because it rejects NaN and Infinity. Unfortunately, isFinite will attempt to
convert its operand to a number, so it is not a good test if a value is not actually a
number. You may want to define your own isNumber function:
 */
var isNumber = function isNumber(value) { return typeof value === 'number' &&
isFinite(value);
}








//see also
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



