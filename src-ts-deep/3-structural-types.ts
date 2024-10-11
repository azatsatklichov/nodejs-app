interface Vector2D {
    x: number;
    y: number;
}


function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x ** 2 + v.y ** 2);
}

interface NamedVector {
    name: string;
    x: number;
    y: number;
}

/**
 * The calculateLength function will work with NamedVectors because
they have x and y properties that are numbers. TypeScript is smart enough
to figure this out:
 */
const v: NamedVector = { x: 3, y: 4, name: 'Pythagoras' };
const r = calculateLength(v); // OK, result is 5
console.log(r);


//But this can also lead to trouble. Say you add a 3D vector type:
interface Vector3D {
    x: number;
    y: number;
    z: number;
}

//and write a function to normalize them (make their length 1):
function normalize(v: Vector3D) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}

const n = normalize({ x: 3, y: 4, z: 5 }); //{ x: 0.6, y: 0.8, z: 1 }
console.log(n);
/**
 * BUT This vector has a length of around 1.4, not 1.
 * The bug is that calculateLength operates on 2D vectors, but normalize
operates on 3D vectors. So the z component is ignored in the normalization.

What’s perhaps more surprising is that the type checker does not catch this
issue. Why are you allowed to call calculateLength with a 3D vector,
despite its type declaration saying that it takes 2D vectors?
 */
