//e.g. no type safety with any 
var ageInYears;
//ageInYears = '12';
// ~~~~~~~ Type 'string' is not assignable to type 'number'.
ageInYears = '12'; // OK
//calc age  after one year - chaos 
ageInYears += 1; // OK; at runtime, ageInYears is now "121"
console.log(ageInYears);
///e.g. breaks contract 
function calculateAge(birthDate) {
    console.log(birthDate);
    return 1; //tbd
}
var birthDate = '19e90-01-19';
calculateAge(birthDate); // OK
var person1 = { name: "Oli", age: 12 };
person1.
; //has autocompletion
var person2 = { name: "Oli", age: 12 };
person2.
; //no such 
//Here’s code that manages that component:
function renderSelector(props) { }
var selectedId = 0;
function handleSelectItem(item) {
    selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectItem });
/**
 * You update the component and everything passes the type checker. Victory!
… or is it? handleSelectItem takes an any parameter, so it’s just as happy
with an item as it is with an ID. It produces a runtime exception, despite
passing the type checker. Had you used a more specific type, this would
have been caught by the type checker.
 */
//any Hides Your Type Design
/**
 * The type definition for complex objects, like your application state, can get
quite long. Rather than writing out types for the dozens of properties in
your app’s state, you may be tempted to just use an any type and be done
with it.
This is problematic for all the reasons listed in this item. But it’s also
problematic because it hides the design of your state. As Chapter 4
explains, good type design is essential for writing clean, correct, and
understandable code. With an any type, your type design is implicit. This
makes it hard to know whether the design is a good one, or even what the
design is at all. If you ask a coworker to review a change, they’ll have to
reconstruct whether and how you changed the application state. Better to
write it out for everyone to see.
 */
//* any Undermines Confidence in the Type System
/**
 
Every time you make a mistake and the type checker catches it, it boosts
your confidence in the type system. But when you see a type error at
runtime that TypeScript didn’t catch, that confidence takes a hit. If you’re
introducing TypeScript on a larger team, this might make your coworkers
question whether TypeScript is worth the effort. any types are often the
source of these uncaught errors.
TypeScript aims to make your life easier, but TypeScript with lots of any
types can be harder to work with than untyped JavaScript because you have
to fix type errors and still keep track of the real types in your head. When
your types match reality, it frees you from the burden of having to keep type
information in your head. TypeScript will keep track of it for you.
For the times when you must use any, there are better and worse ways to do
it. For much more on how to limit the downsides of any, see Chapter 5.
 */
