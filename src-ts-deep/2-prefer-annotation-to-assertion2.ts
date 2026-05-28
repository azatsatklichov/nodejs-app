 

//when to use type-assertions,... 
/**
 * So when should you use a type assertion? Type assertions make the most
sense when you truly do know more about a type than TypeScript does,
typically from context that isn’t available to the type checker. If you’re
working in a browser, for instance, you may know the type of a DOM
element more precisely than TypeScript does:

Because TypeScript doesn’t have access to the DOM of your page, it has no
way of knowing that #myButton is a button element. And it doesn’t know
that the currentTarget of the event should be that same button. Since you
have information that TypeScript does not, a type assertion makes sense
here. 

It allows you to tell the type checker that you
 know better than it does, and it silences the error that would otherwise occur\
  if you tried to access
properties that do not exist on the object.
 */

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
const elNulll = document.getElementById('foo');
// ^? const elNull: HTMLElement | null
const ell = document.getElementById('foo') as HTMLElement;
// ^? const el: HTMLElement

/**
 * This sort of type assertion is so common that it gets a special syntax and is
known as a non-null assertion:

Used as a prefix, ! is JavaScript’s logical not operator. But as a suffix, ! is
interpreted as a type assertion that the value is non-null. This is an
improvement over as because it allows the non-null part of the type to pass
through unaltered.

known as a non-null assertion: !
 
 */
const el22 = document.getElementById('foo')!; 


/**
 * Still, you should treat ! with as much caution as any other assertion: it is
erased during compilation, so you should only use it if you have
information that the type checker lacks and can ensure that the value is nonnull.
If you can’t, you should use a conditional to check for the null case.
If you’re accessing a property or method on an object that might be null, it
can be convenient to use the 

“optional chaining” operator, ?.:
 */
document.getElementById('foo')?.addEventListener('click', () => {
alert('Hi there!');
});

/**
 * This has some superficial resemblance to !. 
 * but it’s quite different. 
 * 
 * a?.b is a JavaScript construct that checks if the object is null (or undefined) at
runtime before continuing to evaluate the expression. 

a!.b is a type-level construct that compiles to just a.b. 
If the object is null at runtime, it will throw an exception. 

a?.b is safer than a!.b, but don’t go too crazy with it.
If it’s essential for your application to add an event listener, then you
probably want to know if it fails!

 */


/**
 * Type assertions have their limits: they don’t let you convert between
arbitrary types. The general rule is that you can use a type assertion to
convert between A and B if they are “comparable” to one another. Using
the set terminology from Item 7, this means that A and B must have a nonempty
intersection. In particular, subtypes are allowed. HTMLElement is a
subtype of HTMLElement | null, so this type assertion is OK. (The
intersection of these types is HTMLElement.) HTMLButtonElement is a
subtype of EventTarget, so that is OK, too. And Person is a subtype of {},
so that assertion is also fine

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
are always OK. This lets you convert between arbitrary types, 

but at least you’re being explicit that you’re doing something suspicious!
 */

const elzz = document.body as unknown as Perzon; // OK




//Casting doesn't actually change the type of the data within the variable. See TS-Casting
let x:unknown = 9;
console.log((x as string).length); //undefined, since number has no length, BUT no error shown

let x2:unknown = 'nine';
console.log((x2 as string).length); //4


let x3:unknown = '9';
console.log((x3 as number).toExponential); 
console.log((x3 as string).length); //1