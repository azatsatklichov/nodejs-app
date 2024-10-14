const rocket = {
    name: 'Falcon 9',
    variant: 'Block 5',
    thrust: '7,607 kN',
};


/**
 * Objects in JavaScript map string (or symbol) keys to values of any type.
TypeScript lets you represent flexible mappings like this by specifying an
index signature on the type:
 */
type Rocket = { [property: string]: string };
const rocket2: Rocket = {
    name: 'Falcon 9',
    variant: 'v1.0',
    thrust: '4,940 kN',
}; // OK

/**
 * The [property: string]: string is the index signature. It specifies
three things:
A name for the keys
This is purely for documentation; it is not used by the type checker in
any way.
A type for the key
This needs to be a subtype of string | number | symbol (aka
PropertyKey). Typically it’s string or a subtype of string such as a
union of string literals. number indexes are best avoided, as you’ll see in
Item 17. symbol is rare in application code.
A type for the values
This can be anything.
 */
