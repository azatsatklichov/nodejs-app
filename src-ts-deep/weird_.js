const a = null + 7; // Evaluates to 7 in JS
console.log(a)


const aa = 7 + undefined; // NaN
console.log(aa)
// ~~~~ The value 'null' cannot be used here.
const b = [] + 12; // Evaluates to '12' in JS
console.log(b)
// ~~~~~~~ Operator '+' cannot be applied to types ...
//alert('Hello', 'TypeScript'); // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2

const x = 2 + '3'; // OK
// ^? const x: string
console.log(x)
const y = '2' + 3; // OK
// ^? const y: string
console.log(y)