interface Square {
    width: number;
}


interface Rectangle extends Square {
    height: number;
}
type Shape = Square | Rectangle;



/**
 * The instanceof check happens at runtime, but Rectangle is a type and so
it cannot affect the runtime behavior of the code.
 */
function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        // ~~~~~~~~~ 'Rectangle' only refers to a type,
        // but is being used as a value here
        return shape.height * shape.width;
        // ~~~~~~ Property 'height' does not exist on type 'Shape'
    } else {
        return shape.width * shape.width;
    }
}

/**
 * This is easiest to
see if you look at the JavaScript that this sample compiles down to:
 */


