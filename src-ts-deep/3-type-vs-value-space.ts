//          ―――――― Types are only used at compile time, 
// and are erased from the emitted JavaScript. 
// This means that you can have a type and a value with the same name, 
// and they will not conflict with each other. For example, you can have a 
// type called 'Person' and a variable called 'Person' at the same time:



//TYPE SPACE 
interface Cylinder {
  radius: number;
  height: number;
}

/**
 * 
 This can get confusing because the same name can refer to different things
depending on which space it’s in:

 */
//VALUE SPACE 
const Cylinder = (radius: number, height: number) => ({radius, height});

/**
 * 
interface Cylinder introduces a symbol in type space. const Cylinder
introduces a symbol with the same name in value space. They have nothing
to do with one another. Depending on the context, when you write
Cylinder, you’ll either be referring to the type or the value. Sometimes this
can lead to errors:


What’s going on here? You probably intended the instanceof to check
whether the shape was of the Cylinder type. But instanceof is
JavaScript’s runtime operator, and it operates on values. So instanceof
Cylinder refers to the function, not the type.
 */
function calculateVolume(shape: unknown) {
  /**
   * It’s not always obvious at first glance whether a symbol is in type space or
value space. 
In this case, the error is telling us that shape is of type unknown. 
You have to tell from the context in which the symbol occurs.
This can get especially confusing because many type-space constructs look
exactly the same as value-space constructs
   */
  if (shape instanceof Cylinder) {
    shape.radius
    //    ~~~~~~ Property 'radius' does not exist on type '{}'
  }
}



//Literal types, for example:
/**
 * Literal types are a good example of this. A string literal type like 'string literal' is a type, but the string literal 'string literal' is a value. A
number literal type like 123 is a type, but the number literal 123 is a
value. They look exactly the same, but they’re in different spaces.

The symbols after a type or interface are in type space, while those
introduced in a const or let declaration are values. 

The same name can be used in both spaces, but they refer to different things. It’s important to understand which space you’re in when you see a symbol, and to be aware of the potential for confusion when the same name is used in both spaces.  

 */
type T1 = 'string literal'; //not in generated code
const v1 = 'string literal'; //in generated code
type T2 = 123; //not in generated code
const v2 = 123; //in generated code


/**
 * Statements in TypeScript can alternate between type space and value space.
The symbols after a type declaration (:) or an assertion (as) are in type
space, while everything after an = in an assignment is in value space. For
example:
 */

interface Person { //type space
  first: string;
  last: string;
}
const jane: Person = { first: 'Jane', last: 'Jacobs' };//value space 



/**
 * Function statements, in particular, can alternate repeatedly between the
spaces. 
The parameter types and return type are in type space, while the 
function name and body are in value space. For example:  

 */
function email(to: Person, subject: string, body: string): Response { 
  return new Response(); 
}


/**
 * The class and enum constructs introduce both a type and a value.
Returning to the first example, for instance, Cylinder could have been a
class:

 * The TypeScript type introduced by a class is based on its shape (its
properties and methods), while the value is the constructor.
 */
class Cylinder2 {
  radius: number;
  height: number;
  constructor(radius: number, height: number) {
    this.radius = radius;
    this.height = height;
  }
}

function calculateVolume2(shape: unknown) {
  if (shape instanceof Cylinder2) {
    shape
    // ^? (parameter) shape: Cylinder2
    shape.radius
    //    ^? (property) Cylinder.radius: number
  }
}


/**
There are many operators and keywords that mean different things in a type
or value context. typeof, for instance:

In a type context, typeof takes a value and returns its TypeScript type. You
can use these as part of a larger type expression, or use a type statement to
give them a name.

In a value context, typeof is JavaScript’s runtime typeof operator. It
returns a string containing the runtime type of the symbol.


This is not the
same as the TypeScript type! JavaScript’s runtime type system is much
simpler than TypeScript’s static type system. In contrast to the infinite
variety of TypeScript types, JavaScript’s typeof operator only has eight
possible return values: "string", "number", "boolean", "undefined",
"object", "function", "symbol", and "bigint".

 */
type T1z = typeof jane;
//   ^? type T1z = Person
type T2z = typeof email;
//   ^? type T2z = (to: Person, subject: string, body: string) => Response

const v1z = typeof jane;  // Value is "object"
const v2z = typeof email;  // Value is "function"





/**
 * The [] property accessor also has an identical-looking equivalent in type
space. But be aware that while obj['field'] and obj.field are
equivalent in value space, they are not in type space. You must use the
former to get the type of another type’s property:
 */
const first: Person['first'] = jane['first'];  // Or jane.first

/**
 * Person['first'] is a type here since it appears in a type context (after a
:). You can put any type in the index slot, including union types or
primitive types:
 */
type PersonEl = Person['first' | 'last']; //not in generated code
//   ^? type PersonEl = string
type Tuple = [string, number, Date]; //not in generated code
type TupleEl = Tuple[number];  //not in generated code
//   ^? type TupleEl = string | number | Date




/**
 * 
 * There are many other constructs that have different meanings in the two
spaces:
this in value space is JavaScript’s this keyword (Item 69). As a type,
this is the TypeScript type of this, aka “polymorphic this.” It’s
helpful for implementing method chains with subclasses.

In value space, & and | are bitwise AND and OR. In type space they
are the intersection and union operators.

In value space, const introduces a new variable, but in type space, as
const changes the inferred type of a literal or literal expression (Item
20).

In value space, extends defines a subclass (class A extends B), but
in type space it defines a subtype (interface A extends B) or a
constraint on a generic type (Generic<T extends number>).


In value space, "in" is used in for loops (for (key in object)),
while in type space it’s used in mapped types (Item 15).


In value space, ! is JavaScript’s logical not operator (!x), but in type
space it’s a non-null type assertion (x!; see Item 9).

If TypeScript doesn’t seem to understand your code at all, it may be because  of confusion around type and value space.

 */
function email2(options: {to: Person, subject: string, body: string}) {
  // ...
}


/**
 * The problem is that Person and string are being interpreted in a value
context. You’re trying to create a variable named Person and two variables
named string. Instead, you should separate the types and values:

This is significantly more verbose, but in practice you may have a named
type for the parameters or be able to infer them from context
 */
function email3({
  to: Person,
  //  ~~~~~~ Binding element 'Person' implicitly has an 'any' type
  subject: string,
  //       ~~~~~~ Binding element 'string' implicitly has an 'any' type
  body: string
  //    ~~~~~~ Binding element 'string' implicitly has an 'any' type
}) { /* ... */ }


//Instead, you should separate the types and values
function email4(
  {to, subject, body}: {to: Person, subject: string, body: string}
) {
  // ...
}

/**
 * Things to Remember
Know how to tell whether you’re in type space or value space while
reading a TypeScript expression. Use the TypeScript playground to
build an intuition for this.
Every value has a static type, but this is only accessible in type space.
Type space constructs such as type and interface are erased and are
not accessible in value space.
Some constructs, such as class or enum, introduce both a type and a
value.
typeof, this, and many other operators and keywords have different
meanings in type space and value space.
 */

