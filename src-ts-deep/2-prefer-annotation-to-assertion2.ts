interface Perzon { name: string };


/**
 * 
 * > tsc .\2-prefer-annotation-to-assertion2.ts | node .\2-prefer-annotation-to-assertion2.js
 * 
 * 
It can be tricky to use a type annotation with arrow functions. What if you
wanted to use the named Person interface in this code?
 */
const people1 = ['alice', 'bob', 'jan'].map(name => ({name}));
// { name: string; }[]... but we want Perzon[]
console.log(people1)

//It’s tempting to use a type assertion here, and it seems to solve the problem:
const people2 = ['alice', 'bob', 'jan'].map(name => ({name} as Perzon)); // Type is Person[]
console.log(people2)

//But this suffers from all the same issues as a more direct use of type
//assertions. For example:
const people3 = ['alice', 'bob', 'jan'].map(name => ({} as Perzon));
// No error
console.log(people3)


/**
 * So how do you use a type annotation in this context instead? The most
straightforward way is to declare a variable in the arrow function:
 */
const people4 = ['alice', 'bob', 'jan'].map(name => {
    const person: Perzon = {name};
    return person
    }); // Type is Person[]


 /**
     * But this introduces considerable noise compared to the original code. A
more concise way is to annotate the return type of the arrow function:

This performs all the same checks on the value as the previous version. The
parentheses are significant here! (name): Person allows the type of name
to be inferred and specifies that the return type should be Person
 */
const people5 = ['alice', 'bob', 'jan'].map(
    (name): Perzon => ({name})
); // Type is Person[]

/**
 * In this case you could have also written the final desired type and let
TypeScript check the validity of the assignment:
 */
const people6: Perzon[] = ['alice', 'bob', 'jan'].map(name => ({name})); // OK




//when to use type-assertions,... 

document.querySelector('#myButton')?.addEventListener('click', e => {
    e.currentTarget
    // ^? (property) Event.currentTarget: EventTarget | null
    // currentTarget is #myButton is a button element
    const button = e.currentTarget as HTMLButtonElement;
    // ^? const button: HTMLButtonElement
    });

/**
     What if a variable’s type includes null but you know from context that this
isn’t possible? You can use a type assertion to remove null from a type:
 */
const elNull = document.getElementById('foo');
// ^? const elNull: HTMLElement | null
const el = document.getElementById('foo') as HTMLElement;
// ^? const el: HTMLElement

/**
 * This sort of type assertion is so common that it gets a special syntax and is
known as a non-null assertion:

Used as a prefix, ! is JavaScript’s logical not operator. But as a suffix, ! is
interpreted as a type assertion that the value is non-null. This is an
improvement over as because it allows the non-null part of the type to pass
through unaltered.
 */
const el2 = document.getElementById('foo')!; 


/**
 * Still, you should treat ! with as much caution as any other assertion: it is
erased during compilation, so you should only use it if you have
information that the type checker lacks and can ensure that the value is nonnull.
If you can’t, you should use a conditional to check for the null case.
If you’re accessing a property or method on an object that might be null, it
can be convenient to use the “optional chaining” operator, ?.:
 */
document.getElementById('foo')?.addEventListener('click', () => {
alert('Hi there!');
});


/**
 * But you can’t convert between a Person and an HTMLElement since their
intersection is empty (i.e., the never type):
 */
interface Perzon { name: string; }
const body = document.body;
const elz = body as Perzon;
// ~~~~~~~~~~~~~~
// Conversion of type 'HTMLElement' to type 'Person' may be a mistake because
// neither type sufficiently overlaps with the other. If this was intentional,
// convert the expression to 'unknown' first.

/**
 * 
 * The error suggests an escape hatch, namely, using the unknown type (Item
46). Every type is a subtype of unknown, so assertions involving unknown
are always OK. This lets you convert between arbitrary types, but at least
you’re being explicit that you’re doing something suspicious!
 */

const elzz = document.body as unknown as Perzon; // OK


//avoid using type annotations everywhere
const arr: string[] = ['a', 'b', 'c'];
arr.forEach((str: string) => {
    //TBD
});
//prefer below, we will get full type safety, TS already know it
arr.forEach((str) => {
    //TBD
});