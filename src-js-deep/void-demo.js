void function test() {
    console.log('boo!');
    // expected output: "boo!"
}();


//test();

try {
    //test();
} catch (e) {
    console.log(e);
    // expected output: ReferenceError: test is not defined
}


//It even discards the functions default return value and explicitly returns
let i = void 2; // i === undefined  //void always returned the real undefined ;))
console.log(i);


//IIF
void function () {
    console.log('What')
}();

void function what() {
    console.log('What')
}();

//what();


/**
 * So void and undefined are pretty much the same. There’s one little difference though,
 * and this difference is significant: void as a return type can be substituted with
 * different types, to allow for advanced callback patterns:
 */

console.log(void 0); //undefined
console.log(undefined); //undefined


//IIFE - immediately invoked function expression
(function () {
    return 42;
})(); // 42

void function () {
    return 42;
}(); //undefined

(function x() {
})(); // undefined

let tt = (function() {})() === void 0; //undefined
console.log(tt); //true

let rr = (function() {})() === undefined;
console.log(rr);





