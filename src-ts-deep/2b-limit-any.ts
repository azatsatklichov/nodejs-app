//e.g. no type safety with any 

let ageInYears: number;
//ageInYears = '12';
// ~~~~~~~ Type 'string' is not assignable to type 'number'.
ageInYears = '12' as any; // OK

//calc age  after one year - chaos
/**
 * In the preceding example, the type declaration says that ageInYears is a
number. But any lets you assign a string to it. The type checker will
believe that it’s a number (that’s what you said, after all), and the chaos will
go uncaught:
 */
ageInYears += 1; // OK; at runtime, ageInYears is now "121"
console.log(ageInYears)


///e.g. breaks contract 

function calculateAge(birthDate: Date): number {
    console.log(birthDate)
    return 1; //tbd
}

let birthDate: any = '19e90-01-19';
/**
 * When you write a function, you are specifying a contract: if the caller gives
you a certain type of input, you’ll produce a certain type of output. But with
an any type, you can break these contracts 
without the type checker complaining. In this example, calculateAge
 */
calculateAge(birthDate); // OK


//There Are No Language Services for any Types
let person1 = { name: "Oli", age: 12 };
person1.age //has autocompletion

let person2: any = { name: "Oli", age: 12 };
//person2. //no such


//Renaming is another such service. If you have a Person type and functions
//to format a person’s name:
interface Person {
    first: string;
    last: string;
}
/**
 * 
then you can select first in your editor, choose “Rename Symbol,” and
change it to firstName.

This changes the formatName function but not the any version:
TRY with right click on first and select "Rename Symbol" in your editor, then change it to firstName. You will see that the formatName function is updated but the formatNameAny function is not updated, which can lead to bugs.

One of TypeScript’s tag lines is “JavaScript that scales.” A key part of
“scales” is the language services, which are an essential part of the
TypeScript experience (see Item 6). Losing them will lead to a loss in
productivity, not just for you but for everyone else working with your code.
 */
const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;



//any Types Mask Bugs When You Refactor Code
/**
 * Suppose you’re building a web application in which users can select some
sort of item. One of your components might have an onSelectItem
callback. Writing a type for an item seems like a hassle, so you just use any
as a stand-in:
 */
interface ComponentProps {
    onSelectItem: (item: any) => void;
}

//Here’s code that manages that component:
function renderSelector(props: ComponentProps) { /* ... */ }
let selectedId: number = 0;
function handleSelectItem(item: any) {
    selectedId = item.id;
}

renderSelector({ onSelectItem: handleSelectItem });

/**
 * Later you rework the selector in a way that makes it harder to pass the
whole item object through to onSelectItem. But that’s no big deal since
you just need the ID. You change the signature in ComponentProps:
 */
interface ComponentProps2 {
    onSelectItem: (id: number) => void;
}
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




let msg; //implicit ANY, no INTELLISENCE
//bad experience, like repeating VAR experience 
msg = false; //no INTELLISENCE
msg = 123; //no INTELLISENCE
msg = "abc"; //no INTELLISENCE

//1-way cast
(<string>msg).startsWith("a");
console.log((<string>msg).startsWith("a"));
//(<number>msg).toFixed(); //TypeError: msg.toFixed is not a functio - Casting doesn't actually change the type of the data within the variable. See TS-Casting
console.log((<number>msg).toFixed); //undefined
//2-way
(msg as string).startsWith("a");


