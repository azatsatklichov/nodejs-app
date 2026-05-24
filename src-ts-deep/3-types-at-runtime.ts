interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number;
}
type Shape = Square | Rectangle;

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
function calculateArea1(shape: Shape) {
    if (shape instanceof Rectangle) { //a type (which is not available at runtime) 
        //                 ~~~~~~~~~ 'Rectangle' only refers to a type,
        //                           but is being used as a value here
        return shape.height * shape.width;
        //           ~~~~~~ Property 'height' does not exist on type 'Shape'
    } else {
        return shape.width * shape.width;
    }
}


/*
There are several ways to do this. One is to check for the presence of a
height property:


*/
function calculateArea2(shape: Shape) {
    if ('height' in shape) {
        return shape.width * shape.height;
        //     ^? (parameter) shape: Rectangle
    } else {
        return shape.width * shape.width;
    }
}

/**
 * This works because the property check only involves values available at
runtime, but still allows the type checker to refine shape’s type to
Rectangle.
Another way would be to introduce a “tag” to explicitly store the type in a
way that’s available at runtime:
 */
interface Square3 {
    kind: 'square';
    width: number;
}
interface Rectangle3 {
    kind: 'rectangle';
    height: number;
    width: number;
}

/**
 * Here the kind property acts as the “tag,” and we say that the Shape type is a
“tagged union.” It’s also sometimes called a “discriminated union,” in
which case kind is the “discriminant.” The terms are interchangeable.
Because they make it so easy to recover type information at runtime,
tagged/discriminated unions are ubiquitous in TypeScript.
 */
type Shape3 = Square3 | Rectangle3;
function calculateArea3(shape: Shape3) { //a type (which is not available at runtime) 
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
        // ^? (parameter) shape: Rectangle3 
    } else {
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
    width: number;
    constructor(width: number) {
        this.width = width;
        ;
    }
}
class Rectangle4 extends Square4 {
    height: number;
    constructor(width: number, height: number) {
        super(width);
        this.height = height;
    }
}
type Shape4 = Square4 | Rectangle4;
function calculateArea4(shape: Shape4) {
    if (shape instanceof Rectangle4) {
        return shape.width * shape.height;
        // ^? (parameter) shape: Rectangle
    } else {
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
function asNumber(val: number | string): number {
    return val as number;
}

/**
 * There is no conversion going on whatsoever. The as number is a type
operation, so it cannot affect the runtime behavior of your code. To
normalize the value you’ll need to check its runtime type and do the
conversion using JavaScript constructs:

“as number” is a type assertion, sometimes inaccurately called a “cast.”
 */
function asNumber2(val: number | string): number {
    return Number(val);
}



//Runtime Types May Not Be the Same as Declared Types
function setLightSwitch(value: boolean) {
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

/**
 * TypeScript usually flags dead code, but it does not complain about this,
even with the strict option. How could you hit this branch?

The key is to remember that boolean is the declared type. Because it is a
TypeScript type, it goes away at runtime. In JavaScript code, a user might
inadvertently call setLightSwitch with a value like "ON".

There are ways to trigger this code path in pure TypeScript, too. Perhaps the
function is called with a value that comes from a network call:
 */





/**
 * You’ve declared that the result of the /light request is
LightApiResponse, but nothing enforces this. If you misunderstood the
API and lightSwitchValue is really a string, then a string will be passed
to setLightSwitch at runtime. Or perhaps the API changed after you
deployed.
TypeScript can get quite confusing when your runtime types don’t match
the declared types, and you should avoid these so-called “unsound” types
whenever you can. But be aware that it’s possible for a value to have a
runtime type other than the one you’ve declared.
 */


interface LightApiResponse {
    /**
     * API and lightSwitchValue is really a string, then a string will be passed
to setLightSwitch at runtime.
     */
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch('/light');
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}


//You Cannot Overload a Function Based on TypeScript Types
function addd(a: number, b: number) { return a + b; }
//       ~~~ Duplicate function implementation
function addd(a: string, b: string) { return a + b; }
//       ~~~ Duplicate function implementation

/**
 * TypeScript does provide a facility for overloading functions, but it operates
entirely at the type level. You can provide multiple type signatures for a
function, but only a single implementation:

The first two signatures of add only provide type information. When
TypeScript produces JavaScript output, they are removed, and only the
implementation remains.
 */
function add(a: number, b: number): number; //not exist in JS generated code 
function add(a: string, b: string): string;//not exist in JS generated code 

function add(a: any, b: any) {
  return a + b;
}

const three = add(1, 2);
//    ^? const three: number
console.log(three); // 3
const twelve = add('1', '2');
//    ^? const twelve: string
console.log(twelve); // "12"