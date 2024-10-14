interface Person {
    name: string;
}
interface PersonSpan2 extends Person {
    birth: Date;
    death?: Date;
}

const p: PersonSpan2 = { name: "Ole", birth: new Date() }
//p.


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
const s2: Student = { name: "Ole", ageYears: null }
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