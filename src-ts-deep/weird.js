//These statements both pass the type checker, even though they are
//questionable and do produce runtime errors in many other languages. But
//this does accurately model the runtime behavior of JavaScript, where both
//expressions result in the string "23".
var x = 2 + '3'; // OK
// ^? const x: string
console.log(x);
var y = '2' + 3; // OK
// ^? const y: string
console.log(y);
var a = null + 7; // Evaluates to 7 in JS
console.log(a);
// ~~~~ The value 'null' cannot be used here.
var b = [] + 12; // Evaluates to '12' in JS
console.log(b);
// ~~~~~~~ Operator '+' cannot be applied to types ...
//alert('Hello', 'TypeScript'); // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2
//Code with Type Errors Can Produce Output
var l = 'hello';
l = 1234; //Type 'number' is not assignable to type 'string'.ts(2322)
console.log(l); //1234
function calculateArea22(shape) {
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
        // ^? (parameter) shape: Rectangle
    }
    else {
        return shape.width * shape.width;
        // ^? (parameter) shape: Square
    }
}
