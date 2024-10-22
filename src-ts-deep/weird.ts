//These statements both pass the type checker, even though they are
//questionable and do produce runtime errors in many other languages. But
//this does accurately model the runtime behavior of JavaScript, where both
//expressions result in the string "23".

const x = 2 + '3'; // OK
// ^? const x: string
console.log(x)
const y = '2' + 3; // OK
// ^? const y: string
console.log(y)

const a = null + 7; // Evaluates to 7 in JS
console.log(a)
// ~~~~ The value 'null' cannot be used here.
const b = [] + 12; // Evaluates to '12' in JS
console.log(b)
// ~~~~~~~ Operator '+' cannot be applied to types ...
//alert('Hello', 'TypeScript'); // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2


//Code with Type Errors Can Produce Output
let l = 'hello';
l = 1234; //Type 'number' is not assignable to type 'string'.ts(2322)
console.log(l) //1234
//> tsc test.ts 
//>node test.js
/**
 * 
var l = 'hello';
l = 1234;
 * 
 */

//You Cannot Check TypeScript Types at Runtime
interface Square {
    kind: 'square';
    width: number;
}
interface Rectangle {
    kind: 'rectangle';
    height: number;
    width: number;
}
type Shape22 = Square | Rectangle;
function calculateArea22(shape: Shape22) {
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
        // ^? (parameter) shape: Rectangle
    } else {
        return shape.width * shape.width;
        // ^? (parameter) shape: Square
    }
}

const sh:Shape22 = {width:232, kind:'square'}
console.log("Sh = "+calculateArea22(sh));
/**
 * 23
23
7
12
1234
 */
const person = "Alym";
const date = new Date();
`Hello ${person}, today is ${date.toDateString()}!`