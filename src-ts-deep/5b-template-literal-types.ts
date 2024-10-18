
const cube = (a) =>  a * a * a;
const html = `
 <div>
  ${Math.random()}
  <br/>
  ${cube(3)};
 </div>
`;
console.log(html)


/**
 When a union is used in the interpolated position, the type is the set of every possible
 string literal that could be represented by each union member:
 */
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

/**
 * For each interpolated position in the template literal, 
 * the unions are cross multiplied:
 */
type AllLocaleIDs2 = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
type LocaleMessageIDs2 = `${Lang}_${AllLocaleIDs}`;


/**
 * String Unions in Types
The power in template literals comes when defining a new string based on information inside a type.

Consider the case where a function (makeWatchedObject) adds a new function called on() to a passed object. In JavaScript, its call might look like: makeWatchedObject(baseObject). We can imagine the base object as looking like:
 */

const passedObject = {
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
};

/**
* The on function that will be added to the base object expects 
* two arguments, an eventName (a string) and a callback (a function).

The eventName should be of the form attributeInThePassedObject + "Changed"; 
thus, firstNameChanged as derived from the attribute firstName in the base object.

The callback function, when called:

The callback function, when called:

Should be passed a value of the type associated with the name attributeInThePassedObject; thus, since firstName is typed as string, the callback for the firstNameChanged event expects a string to be passed to it at call time. Similarly events associated with age should expect to be called with a number argument
Should have void return type (for simplicity of demonstration)
The naive function signature of on() might thus be: on(eventName: string, callback: (newValue: any) => void). However, in the preceding description, we identified important type constraints that we’d like to document in our code. Template Literal types let us bring these constraints into our code.
 */
const person1 = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});

// makeWatchedObject has added `on` to the anonymous Object

person1.on("firstNameChanged", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
});

/**
 * Notice that on listens on the event "firstNameChanged", 
 * not just "firstName". Our naive specification of on() 
 * could be made more robust if we were to ensure that the set of 
 * eligible event names was constrained by the union of attribute 
 * names in the watched object with “Changed” added at the end. 
 * While we are comfortable with doing such a calculation in 
 * JavaScript i.e. Object.keys(passedObject).map(x => `${x}Changed`),
 *  template literals inside the type system provide a similar approach 
 * to string manipulation:
 */

type PropEventSource1<T> = { //T - Type
    on(eventName: `${string & keyof T}Changed`, callback: (newValue: any) => void): void;
};
 
/// Create a "watched object" with an `on` method
/// so that you can watch for changes to properties.
declare function makeWatchedObject1<Type>(obj: Type): Type & PropEventSource1<Type>;


////////////////


/**
 * Inference with Template Literals
Notice that we did not benefit from all the information provided in the original passed object. Given change of a firstName (i.e. a firstNameChanged event), we should expect that the callback will receive an argument of type string. Similarly, the callback for a change to age should receive a number argument. We’re naively using any to type the callback’s argument. Again, template literal types make it possible to ensure an attribute’s data type will be the same type as that attribute’s callback’s first argument.

The key insight that makes this possible is this: we can use a function with a generic such that:

The literal used in the first argument is captured as a literal type
That literal type can be validated as being in the union of valid attributes in the generic
The type of the validated attribute can be looked up in the generic’s structure using Indexed Access
This typing information can then be applied to ensure the argument to the callback function is of the same type

 */
type PropEventSource2<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource2<Type>;

const person2 = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});

person2.on("firstNameChanged", newName => {
    console.log(`new name is ${newName.toUpperCase()}`);
});

person2.on("ageChanged", newAge => {
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})

//Here we made on into a generic method.

