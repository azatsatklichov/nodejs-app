const n1:never = 12;
const n2:never = true;

//with universal type possible
const n12:unknown = 12;
const n22:unknown = true;

//or any
const n13:any = 12;
const n23:any = true;

/**
 * There are also errors of omission: times when you should do something
but you don’t. While TypeScript won’t always catch these on its own,
there’s a popular trick that can be used to convert a missing case in a
switch or if statement into a type error. This is known as “exhaustiveness
checking.” Let’s see how it works.
Suppose you’re building a drawing program, perhaps using the HTML
<canvas> element. You might define the set of shapes you can draw using a
tagged union:
 */
type Coord = [x: number, y: number];
interface Box {
    type: 'box';
    topLeft: Coord;
    size: Coord;
}
interface Circle {
    type: 'circle';
    center: Coord;
    radius: number;
}
type Shape = Box | Circle;

//You can draw these using built-in canvas methods:
function drawShape(shape: Shape, context: CanvasRenderingContext2D) {
    switch (shape.type) {
        case 'box':
            context.rect(...shape.topLeft, ...shape.size);
            break;
        case 'circle':
            context.arc(...shape.center, shape.radius, 0, 2 * Math.PI);
            break;
    }
}

//So far, so good. Now you decide to add a third shape:
interface Line {
    type: 'line';
    start: Coord;
    end: Coord;
}
type Shape2 = Box | Circle | Line;

/**
 * 
 * There are no type errors, but this change has introduced a bug: drawShape
will silently ignore any line shapes. 

This is an error of omission. 
 
 */
function drawShapeErrorOmission(shape: Shape2, context: CanvasRenderingContext2D) {
    switch (shape.type) {
        case 'box':
            context.rect(...shape.topLeft, ...shape.size);
            break;
        case 'circle':
            context.arc(...shape.center, shape.radius, 0, 2 * Math.PI);
            break;
    }
}

/**
How can
we get TypeScript to catch this kind of mistake?
If you look at the type of shape after an exhaustive switch statement,
there’s a clue:
 */
function processShape2(shape: Shape2) {
    switch (shape.type) {
        case 'box': break;
        case 'circle': break;
        case 'line': break; //no complain
        default:
            shape
        // ^? (parameter) shape: never
    }
}

/**
 * never type is a “bottom” type whose domain is
the empty set. When we’ve covered all the possible types of Shape, this is
all that’s left. If we missed a case, then the type would be something other
than never:
 */
function processShape3(shape: Shape2) {
    switch (shape.type) {
        case 'box': break;
        case 'circle': break;
        // (forgot 'line')
        default:
            shape
        // ^? (parameter) shape: Line
    }
}

/**
 * No value is assignable to the never type, and we can use this to turn an
omission into a type error:
 */
function assertUnreachable(value: never): never {
    throw new Error(`Missed a case! ${value}`);
}
function drawShape4(shape: Shape2, context: CanvasRenderingContext2D) {
    switch (shape.type) {
        case 'box':
            context.rect(...shape.topLeft, ...shape.size);
            break;
        case 'circle':
            context.arc(...shape.center, shape.radius, 0, 2 * Math.PI);
            break;
        default:
            assertUnreachable(shape);
        // ~~~~~
        // ... type 'Line' is not assignable to parameter of type 'never'.
    }
}

/**
 * We’ll get into the details of assertUnreachable momentarily, but first let’s
fix the error by covering the missing case:
 */
function drawShape5(shape: Shape2, context: CanvasRenderingContext2D) {
    switch (shape.type) {
        case 'box':
            context.rect(...shape.topLeft, ...shape.size);
            break;
        case 'circle':
            context.arc(...shape.center, shape.radius, 0, 2 * Math.PI);
            break;
        case 'line':
            context.moveTo(...shape.start);
            context.lineTo(...shape.end);
            break;
        default:
            assertUnreachable(shape); // ok
    }
}