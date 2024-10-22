interface Person { name: string };

const alice: Person = { name: 'Alice' }; //type annotation
const bob = { name: 'Bob' } as Person; //type assertion (a.k.a casting, avoid this term)   
const ole = <Person>{name: 'Bob'};

 
 
const alice2: Person = { name: 'Alice', id:3434 };  
const bob2 = { name: 'Bob', id:3434  } as Person;  
const ole2 = <Person>{};






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


//Casting doesn't actually change the type of the data within the variable. See TS-Casting
let x:unknown = 9;
console.log((x as string).length); //undefined, since number has no length, BUT no error shown

let x2:unknown = 'nine';
console.log((x2 as string).length); //4


let x3:unknown = '9';
console.log((x3 as number).toExponential); //undefined, since number has no length, BUT no error shown
console.log((x3 as string).length); //1