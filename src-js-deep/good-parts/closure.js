
/**
 * Closure
The good news about scope is that inner functions get access to the parameters and
variables of the functions they are defined within (with the exception of this and
arguments). This is a very good thing.
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