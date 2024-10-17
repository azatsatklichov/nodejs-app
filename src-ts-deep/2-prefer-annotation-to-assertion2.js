//when to use type-assertions,... 
var _a, _b;
(_a = document.querySelector('#myButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    e.currentTarget;
    // ^? (property) Event.currentTarget: EventTarget | null
    // currentTarget is #myButton is a button element
    var button = e.currentTarget;
    // ^? const button: HTMLButtonElement
});
/**
     What if a variable’s type includes null but you know from context that this
isn’t possible? You can use a type assertion to remove null from a type:
 */
var elNull = document.getElementById('foo');
// ^? const elNull: HTMLElement | null
var el = document.getElementById('foo');
// ^? const el: HTMLElement
/**
 * This sort of type assertion is so common that it gets a special syntax and is
known as a non-null assertion:

Used as a prefix, ! is JavaScript’s logical not operator. But as a suffix, ! is
interpreted as a type assertion that the value is non-null. This is an
improvement over as because it allows the non-null part of the type to pass
through unaltered.
 */
var el2 = document.getElementById('foo');
/**
 * Still, you should treat ! with as much caution as any other assertion: it is
erased during compilation, so you should only use it if you have
information that the type checker lacks and can ensure that the value is nonnull.
If you can’t, you should use a conditional to check for the null case.
If you’re accessing a property or method on an object that might be null, it
can be convenient to use the “optional chaining” operator, ?.:
 */
(_b = document.getElementById('foo')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    alert('Hi there!');
});
var body = document.body;
var elz = body;
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
var elzz = document.body; // OK
