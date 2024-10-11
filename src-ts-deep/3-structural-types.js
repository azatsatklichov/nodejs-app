function calculateLength(v) {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
}
/**
 * The calculateLength function will work with NamedVectors because
they have x and y properties that are numbers. TypeScript is smart enough
to figure this out:
 */
var v = { x: 3, y: 4, name: 'Pythagoras' };
var r = calculateLength(v); // OK, result is 5
console.log(r);
//and write a function to normalize them (make their length 1):
function normalize(v) {
    var length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}
var n = normalize({ x: 3, y: 4, z: 5 }); //{ x: 0.6, y: 0.8, z: 1 }
console.log(n);
/**
 * BUT This vector has a length of around 1.4, not 1.
 * The bug is that calculateLength operates on 2D vectors, but normalize
operates on 3D vectors. So the z component is ignored in the normalization.

What’s perhaps more surprising is that the type checker does not catch this
issue. Why are you allowed to call calculateLength with a 3D vector,
despite its type declaration saying that it takes 2D vectors?
 */
