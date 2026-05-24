"use strict";
/**
 *
 * @param shape The instanceof check happens at runtime, but Rectangle is a type and so
it cannot affect the runtime behavior of the code. TypeScript types are
“erasable”: part of compilation to JavaScript is simply removing all the
interfaces, types, and type annotations from your code. This is easiest to
see if you look at the JavaScript that this sample compiles down to:


There’s no mention of Rectangle before the instanceof check here, hence
the problem.

a type (which is not available at runtime)

* @returns
 */
function calculateArea1(shape) {
    if (shape instanceof Rectangle) { //a type (which is not available at runtime) 
        //                 ~~~~~~~~~ 'Rectangle' only refers to a type,
        //                           but is being used as a value here
        return shape.height * shape.width;
        //           ~~~~~~ Property 'height' does not exist on type 'Shape'
    }
    else {
        return shape.width * shape.width;
    }
}
/*
There are several ways to do this. One is to check for the presence of a
height property:


*/
function calculateArea2(shape) {
    if ('height' in shape) {
        return shape.width * shape.height;
        //     ^? (parameter) shape: Rectangle
    }
    else {
        return shape.width * shape.width;
    }
}
function calculateArea3(shape) {
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
        // ^? (parameter) shape: Rectangle3 
    }
    else {
        return shape.width * shape.width;
        // ^? (parameter) shape: Square3
    }
}
/**
 * Some constructs introduce both a type (which is not available
 * at runtime)
and a value (which is).

The class keyword is one of these. Making Square
and Rectangle classes would be another way to fix the error:
 */
class Square4 {
    width;
    constructor(width) {
        this.width = width;
        ;
    }
}
class Rectangle4 extends Square4 {
    height;
    constructor(width, height) {
        super(width);
        this.height = height;
    }
}
function calculateArea4(shape) {
    if (shape instanceof Rectangle4) {
        return shape.width * shape.height;
        // ^? (parameter) shape: Rectangle
    }
    else {
        return shape.width * shape.width;
        // ^? (parameter) shape: Square
    }
}
/**
 * This works because class Rectangle introduces both a type and a value,
whereas interface only introduced a type.
The Rectangle in type Shape = Square | Rectangle refers to the type,
but the Rectangle in shape instanceof Rectangle refers to the value, in
this case the constructor function. This distinction is important to
understand but can be quite subtle. Item 8 shows you how to tell which is
which.
 */
//Type Operations Cannot Affect Runtime Values
/**
 *
 *   Here’s a misguided attempt that the type checker accepts:
 * Looking at the generated JavaScript makes it clear what this function really
does:

There is no conversion going on whatsoever. The as number is a type
operation, so it cannot affect the runtime behavior of your code.
 */
function asNumber(val) {
    return val;
}
/**
 * There is no conversion going on whatsoever. The as number is a type
operation, so it cannot affect the runtime behavior of your code. To
normalize the value you’ll need to check its runtime type and do the
conversion using JavaScript constructs:

“as number” is a type assertion, sometimes inaccurately called a “cast.”
 */
function asNumber2(val) {
    return Number(val);
}
//Runtime Types May Not Be the Same as Declared Types
function setLightSwitch(value) {
    switch (value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        default:
            console.log(`I'm afraid I can't do that.`);
    }
}
function turnLightOn() {
    throw new Error("Function not implemented.");
}
function turnLightOff() {
    throw new Error("Function not implemented.");
}
async function setLight() {
    const response = await fetch('/light');
    const result = await response.json();
    setLightSwitch(result.lightSwitchValue);
}
//You Cannot Overload a Function Based on TypeScript Types
function addd(a, b) { return a + b; }
//       ~~~ Duplicate function implementation
function addd(a, b) { return a + b; }
function add(a, b) {
    return a + b;
}
const three = add(1, 2);
//    ^? const three: number
console.log(three); // 3
const twelve = add('1', '2');
//    ^? const twelve: string
console.log(twelve); // "12"
