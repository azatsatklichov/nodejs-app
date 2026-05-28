interface Person { name: string };

const alice: Person = { name: 'Alice' }; //type annotation
const bob = { name: 'Bob' } as Person; //type assertion (a.k.a casting, avoid this term)   
const ole = <Person>{name: 'Bob'};

 
 
const alice2: Person = { name: 'Alice', id:3434 };  // Shows error
const bob2 = { name: 'Bob', id:3434  } as Person;  // No error
const ole2 = <Person>{};

const alice3a: Person = {};
//    ~~~~~ Property 'name' is missing in type '{}' but required in type 'Person'
const bob3a = {} as Person;  // No error

/**
 * While these achieve similar ends, they are actually quite different! 
 * The first (alice: Person) adds a type annotation to the variable 
 * and ensures that the value conforms to the type. 
 * 
 * The latter (as Person) performs a type assertion. 
 * This tells TypeScript that, despite the type it inferred, you know
better and would like the type to be Person. 

This can be useful in some cases, but it also means that you
 lose thesafety of type checking. In the example above, the type 
 assertion allows you to assign a value that does not conform to 
 the Person interface without any error. This can lead to runtime 
 errors if you try to access properties that do not exist on the object. 
 
 The type annotation verifies that the value conforms to the interface. Since
it does not, TypeScript flags an error. The type assertion silences this error
by telling the type checker that, for whatever reason, you know better than
it does.

 TypeScript has an additional tool known
as excess property checking that flags extra properties in objects with
declared types, but it doesn’t apply if you use an assertion


 Therefore, it is generally recommended to prefer type annotations over 
 type assertions whenever possible.
 */


//more examples .... 

interface Perzon { name: string };

/**
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
// NO ERROR 
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
