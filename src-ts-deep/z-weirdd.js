"use strict";
/**
 * There are no type annotations in this program, but TypeScript’s type
checker is still able to spot the problem:
 */
let city = 'new york city';
console.log(city.toUppercase());
/**
 * Even if your code doesn’t throw an exception, it still might not do what you
intend. TypeScript tries to catch some of these issues, too.

For example, this JavaScript program:
 */
const states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
    // ...
];
for (const state of states) {
    console.log(state.capitol);
}
const states2 = [
    { name: 'Alabama', capitol: 'Montgomery' },
    { name: 'Alaska', capitol: 'Juneau' },
    { name: 'Arizona', capitol: 'Phoenix' },
    // ...
];
for (const state of states2) {
    console.log(state.capital);
    // ~~~~~~~ Property 'capital' does not exist on type
    // '{ name: string; capitol: string; }'.
    // Did you mean 'capitol'?
}
const states3 = [
    { name: 'Alabama', capitol: 'Montgomery' },
    // ~~~~~~~
    { name: 'Alaska', capitol: 'Juneau' },
    // ~~~~~~~
    { name: 'Arizona', capitol: 'Phoenix' },
    // ~~~~~~~ Object literal may only specify known properties,
    // but 'capitol' does not exist in type 'State'.
    // Did you mean to write 'capital'?
    // ...
];
for (const state of states3) {
    console.log(state.capital);
}
/**
 * For instance, had you only misspelled capitol once in the array,
there wouldn’t have been an error before. But with the type annotation,
there is:
 */
const states4 = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capitol: 'Juneau' },
    // ~~~~~~~ Did you mean to write 'capital'?
    { name: 'Arizona', capital: 'Phoenix' },
    // ...
];
for (const state of states4) {
    console.log(state.capital);
}
//Now the errors match the problem and the suggested fix is correct in above.
/**
 * This will become a familiar dynamic as you work with the type checker: the
more information you give it, the more problems it will be able to find.

In terms of the Venn diagram, we can add in a new group of programs:
TypeScript programs which pass the type checker (see Figure 1-2).
 */
//These statements both pass the type checker, even though they are
//questionable and do produce runtime errors in many other languages. But
//this does accurately model the runtime behavior of JavaScript, where both
//expressions result in the string "23".
const x = 2 + '3'; // OK
// ^? const x: string
console.log(x);
const y = '2' + 3; // OK
// ^? const y: string
console.log(y);
console.log(2 + '3');
console.log('BUUUT - coercion happens for MINUS');
console.log('2' - 3); //-1
console.log(2 - '3'); //-1
const a = null + 7; // Evaluates to 7 in JS
console.log(a);
const aa = undefined + 7; // Evaluates to NAN in JS
console.log(aa);
// ~~~~ The value 'null' cannot be used here.
const b = [] + 12; // Evaluates to '12' in JS
console.log(b);
// ~~~~~~~ Operator '+' cannot be applied to types ...
//alert('Hello', 'TypeScript'); // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2
//Code with Type Errors Can Produce Output
let l = 'hello';
l = 1234; //Type 'number' is not assignable to type 'string'.ts(2322)
console.log(l); //1234
function calculateArea222(shape) {
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
        // ^? (parameter) shape: Rectangle
    }
    else {
        return shape.width * shape.width;
        // ^? (parameter) shape: Square
    }
}
const sh = { width: 232, kind: 'square' };
console.log("Sh = " + calculateArea222(sh)); //Sh = 53824
/**
 * 23
23
7
12
1234
 */
const person = "Alym";
const date = new Date();
`Hello ${person}, today is ${date.toDateString()}!`;
/**
 * If your program type checks, could it still throw an error at runtime? The
answer is “yes.” Here’s an example:
 */
const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());
