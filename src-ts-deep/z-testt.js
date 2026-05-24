"use strict";
// RUN > tsc z-testt.ts --ignoreConfig | node z-testt.js
//JavaScript’s equality operator (==) coerces its operands, leading to unexpected behavior:
if ("" == 0) {
    // It is! But why?? - BOTH false, so why TRUE 
    console.log('Trueeee1');
}
if ("" === 0) {
    // type coercion does not occur with ===, so this is false 
    console.log('Trueeeeee2');
}
x = "s-9"; //number or any number, text in a string 
if (1 < x < 3) {
    // True for *any* value of x!
    console.log('Trueeee3');
}
//JavaScript also allows accessing properties which aren’t present:
const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;
/**
 * As another example, this is JavaScript code that you can run in your browser,
and it will log a value:
 */
console.log(4 / []); //Infinity
