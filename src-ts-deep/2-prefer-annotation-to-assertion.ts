interface Person { name: string };

const alice: Person = { name: 'Alice' };
// ^? const alice: Person
const bob = { name: 'Bob' } as Person;
const ole = <Person>{};

// ^? const bob: Person


/**
 * While these achieve similar ends, they are actually quite different! The first
(alice: Person) adds a type annotation to the variable and ensures that
the value conforms to the type. The latter (as Person) performs a type
assertion. This tells TypeScript that, despite the type it inferred, you know
better and would like the type to be Person.

In general, you should prefer type annotations to type assertions. Here’s
why:
 */
const alice2: Person = {};
// ~~~~~ Property 'name' is missing in type '{}' but required in type 'Person'
const bob2 = {} as Person; // No error

/**
 * 
 The type annotation verifies that the value conforms to the interface. Since
it does not, TypeScript flags an error. The type assertion silences this error
by telling the type checker that, for whatever reason, you know better than
it does.

The same thing happens if you specify an additional property:
 */

const alice3: Person = {
    name: 'Alice',
    occupation: 'TypeScript developer'
    // ~~~~~~~~~ Object literal may only specify known properties,
    // and 'occupation' does not exist in type 'Person'
};
const bob3 = {
    name: 'Bob',
    occupation: 'JavaScript developer'
} as Person; // No error

