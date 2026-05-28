interface Person2 {
    name: string;
}
interface PersonSpan2 extends Person2 {
    birth: Date;
    death?: Date;
}

const pp: PersonSpan2 = { name: "Ole", birth: new Date() }
//pp.


/**
 * 
While extends is typically used to add fields to an interface, anything
matching a subset of the values of the base type will do. This lets you
model more nuanced type relationships:
 */
interface NullableStudent {
    name: string;
    ageYears: number | null;
}
interface Student extends NullableStudent {
    ageYears: number;
}

const s1: NullableStudent = { name: "Ole", ageYears: null }
const s2: Student = { name: "Ole", ageYears: 2 }
//Type 'null' is not assignable to type 'number'.ts(2322)

//If you try to expand the type of ageYears instead, you’ll get an error:
interface StringyStudent extends NullableStudent {
    // ~~~~~~~~~~~~~~
    // Interface 'StringyStudent' incorrectly extends interface 'NullyStudent'.
    ageYears: number | string;
}


/**
 * 
You might hear the term “subtype.” This is another way of saying that one
type’s domain is a subset of the other’s. Thinking in terms of one-, two-,
and three-dimensional vectors:

You’d say that a Vector3D is a subtype of Vector2D, which is a subtype of
Vector1D (in the context of classes, you’d say “subclass”).
 */
interface Vector1D { x: number; }
interface Vector2D extends Vector1D { y: number; }
interface Vector3D extends Vector2D { z: number; }
    

/**
 * Think of “extends,” “assignable to,” and “subtype of” as synonyms for
“subset of.”
 */

/**
 * 
With the Venn diagram, it’s clear that the subset/subtype/assignability
relationships are unchanged if you rewrite the interfaces without extends:
The sets haven’t changed, so neither has the Venn diagram.

 */
interface Vector1D { x: number; }
interface Vector2D { x: number; y: number; }
interface Vector3D { x: number; y: number; z: number; }

/**
 While both interpretations are workable for object types, the set
interpretation becomes much more intuitive when you start thinking about
literal types and union types. 
 */

/**
 * The extends keyword can also appear as a constraint in a generic type, and
it also means “subset of” in this context

What does it mean to extend string? If you’re used to thinking in terms of
object inheritance, it’s hard to interpret. You could define a subclass of the
object wrapper type String (Item 10), but that seems inadvisable 
and it’s not what’s going on here. 

The extends keyword in a generic constraint means 
that the type argument must be a subtype of the constraint type.
So K extends string means that K must be a subtype of string, 
which is to say that K must be assignable to string. 
In other words, K can be string or any literal type 
that extends string, such as 'a' or 'b'.

 * @param val 
 * @param key 
 */
function getKey<K extends string>(val: any, key: K) {
  // ...
}


/**
 * Thinking in terms of sets, on the other hand, it stands to reason that any
type whose domain is a subset of string will do. This includes string literal
types, unions of string literal types, template literal types (Item 54), and
string itself:

“extends” has turned into “assignable” in the last error, but this shouldn’t
trip us up since we know to read both as “subset of.”
 */
getKey({}, 'x');  // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? 'a' : 'b');  // OK, 'a'|'b' extends string
getKey({}, document.title);  // OK, string extends string
getKey({}, 12);
//         ~~ Type 'number' is not assignable to parameter of type 'string'




/**
 * Thinking of types as sets can also clarify the relationships between arrays
and tuples. For example:
 */
const list = [1, 2];
//    ^? const list: number[]
const tuple: [number, number] = list;
//    ~~~~~ Type 'number[]' is not assignable to type '[number, number]'
//          Target requires 2 element(s) but source may have fewer


const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
//    ~~~~~~ '[number, number, number]' is not assignable to '[number, number]'
//           Source has 3 element(s) but target allows only 2.

/**
 * If types are best thought of as sets of values, that means that two types with
the same sets of values are the same. And indeed this is true (with one
caveat, explained below). Unless two types are semantically different and
just happen to have the same domain, there’s no reason to define the same
type twice.
 */

/**
 * Finally, it’s worth noting that not all sets of values correspond to TypeScript
types. There is no TypeScript type for all the integers, or for all the objects
that have x and y properties but no others. You can sometimes subtract
types using Exclude, but only when it would result in a proper TypeScript
type:
 */
type T = Exclude<string|Date, string|number>;
//   ^? type T = Date
type NonZeroNums = Exclude<number, 0>;
//   ^? type NonZeroNums = number
type NonEmptyString = Exclude<string, "">;



/**
 * There’s an important caveat to this interpretation: it works best when you
think of values as immutable.
 */
interface Lockbox {
  code: number;
}
interface ReadonlyLockbox {
  readonly code: number;
}

/**
 * The domain of these two types is precisely the same, but they’re observably
different:
 */
const box: Lockbox = { code: 4216 };
const robox: ReadonlyLockbox = { code: 3625 };
box.code = 1234;  // ok
robox.code = 1234;
//    ~~~~ Cannot assign to 'code' because it is a read-only property.

