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
