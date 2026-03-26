
/**
 * Closure
The good news about scope is that inner functions get access to the parameters and
variables of the functions they are defined within (with the exception of this and
arguments). This is a very good thing.

https://www.w3schools.com/js/js_function_closures.asp
 * 
 */

var myObject = function () {
    var value = 30;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}();

myObject.increment(6);
console.log(myObject.value); //undefined,   scoped variables are not reached
console.log(myObject.getValue());




//JavaScript Closures
function myCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
}
const add = myCounter();
add();
add();
add();

/**
 * Modern Alternative: Private Class Fields
Since ECMAScript 2022, JavaScript supports real private class fields using the # syntax.

Private fields are enforced by the language and cannot be accessed outside the class.
 */