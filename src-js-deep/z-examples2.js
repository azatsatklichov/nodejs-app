const a = "I'm a string primitive";
const b = new String("I'm a String Object");
console.log(a instanceof String); //returns false
console.log(b instanceof String); //returns true


const isString = (str) => {
    return typeof str === 'string' || str instanceof String
}
console.log(isString(a))//true
console.log(isString(b))//true

console.log(void 63);//undefined
console.log(undefined);//undefined

void function what() {
    console.log('What')
}();//using void for IIFE will always evaluate to undefined.

//what();

let i = void 2; // i === undefined
console.log(i)
<a href="javascript:void(0)">Click Here</a>//to make click action not to react

let tt = (function() {})() === void 0; //undefined
console.log(tt); //true


var undefined = 'WoW'


