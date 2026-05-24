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


/**
 * What’s interesting is that you never declared the relationship between
Vector2D and NamedVector. And you didn’t have to write an alternative
implementation of calculateLength for NamedVectors. TypeScript’s type
system is modeling JavaScript’s runtime behavior (Item 1). It allowed
calculateLength to be called with a NamedVector because its structure
was compatible with Vector2D. This is where the term “structural typing”
comes from.
 */

//But this can also lead to trouble. Say you add a 3D vector type:
interface Vector3D {
    x: number;
    y: number;
    z: number;//z?: never;
}

//and write a function to normalize them (make their length 1):
function normalize(v: Vector3D) {
    const length = calculateLength(v); //uses only x and y, ignores z 
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


/**
 * What worked so well with named vectors has backfired here. Calling
calculateLength with an {x, y, z} object doesn’t throw an error. So the
type checker doesn’t complain either, and this behavior has led to a bug.

(If you want this to be an error, you have some options. Item 63 presents a
trick to specifically prohibit the z property, and Item 64 shows how you can
use “brands” to prevent this sort of structural typing altogether.)
As you write functions, it’s easy to imagine that they will be called with
arguments having the properties you’ve declared and no others. 


This is known as a “closed,” “sealed,” or “precise” type, and it cannot be expressed
in TypeScript’s type system. Like it or not, your types are “open.”
 */

//JAVA has SEALED classes, C# has SEALED classes, 
// but TypeScript does not have a way to express this concept.
//  In TypeScript, all types are open and can be extended with additional
//  properties. This is a fundamental aspect of TypeScript's structural 
// type system, and it allows for great flexibility but also requires
//  careful design to avoid unintended consequences.


//This can sometimes lead to surprises:
function calculateLengthL1(v: Vector3D) {
    let length = 0;
    for (const axis of Object.keys(v)) {
        const coord = v.x[axis]; //fix is v.x, see calculateLengthL2
        //            ~~~~~~~ Element implicitly has an 'any' type because ...
        //                    'string' can't be used to index type 'Vector3D'
        length += Math.abs(coord);
    }
    return length;
}
/**
 * Why is this an error? Since axis is one of the keys of v, which is a
Vector3D, it should be either "x", "y", or "z". And according to the
declaration of Vector3D, these are all numbers, so shouldn’t the type of
coord be number?

Is this error a false positive? No! TypeScript is correct to complain. The
logic in the previous paragraph assumes that Vector3D is sealed and does
not have other properties. But it could:
 */
const vec3D = { x: 3, y: 4, z: 1, address: '123 Broadway' };
calculateLengthL1(vec3D);  // OK, returns NaN

/**
 * Iterating over objects can be tricky to type correctly. We’ll return to this
topic in Item 60, but in this case an implementation without loops would be
better:
 */
function calculateLengthL2(v: Vector3D) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}


/**
 * Structural typing can also lead to surprises with classes, which are
compared structurally for assignability:
 */
class SmallNumContainer {
    num: number;
    constructor(num: number) {
        if (num < 0 || num >= 10) {
            throw new Error(`You gave me ${num} but I want something 0-9.`)
        }
        this.num = num;
    }
}

const a = new SmallNumContainer(5);
const b: SmallNumContainer = { num: 2024 };  // OK!
/**
 * Why is b assignable to SmallNumContainer? It has a num property that’s a
number. So the structures match. This might lead to trouble if you write a
function that assumes the validation logic in SmallNumContainer’s
constructor has run. This is less likely to happen by chance for classes with
more properties and methods, but it is quite different than languages like
C++ or Java, where declaring a parameter of type SmallNumContainer
guarantees that it will be either SmallNumContainer or a subclass of it, and
hence that the validation logic in the constructor will have run.

 */


/**
 * Structural typing is beneficial when you’re writing tests. Say you have a
function that runs a query on a database and processes the results:
 */
interface Author {
    first: string;
    last: string;
}
interface PostgresDB {
    runQuery: (sql: string) => any[];
}

function getAuthors(database: PostgresDB): Author[] {
    const authorRows = database.runQuery(`SELECT first, last FROM authors`);
    return authorRows.map(row => ({ first: row[0], last: row[1] }));
}
/**
 * To test this, you could create a mock PostgresDB. But a simpler approach
is to use structural typing and define a narrower interface:

test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
    }
  });
  expect(authors).toEqual([
    {first: 'Toni', last: 'Morrison'},
    {first: 'Maya', last: 'Angelou'}
  ]);
});
 */
interface DB {
    runQuery: (sql: string) => any[];
}
function getAuthors2(database: DB): Author[] {
    const authorRows = database.runQuery(`SELECT first, last FROM authors`);
    return authorRows.map(row => ({ first: row[0], last: row[1] }));
}
