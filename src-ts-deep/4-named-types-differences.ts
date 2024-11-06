
//differences

//1 there are union types but no union interfaces
type AorB = 'a' | 'b';

/**
 * 
An interface can extend some types, but not this one. Extending union
types can sometimes be useful. If you have separate types for Input and
Output variables and a mapping from name to variable:
 */
type Input = { /* ... */ };
type Output = { /* ... */ };
interface VariableMap {
[name: string]: Input | Output;
}
/**
 * 
then you might want a type that attaches the name to the variable. This
would be:
 */
type NamedVariable = (Input | Output) & { name: string };

/**
 * This type cannot be expressed with interface. A type is, in general, more
capable than an interface. It can be a union, and it can also take
advantage of fancy type-level features like mapped types (Item 15) and
conditional types (Item 52).
 */


//2. interface and extends give a bit more error checking than type and &:
interface Person {
name: string;
age: string;
}
type TPerson = Person & { age: number; }; // no error, unusable type
//const t:TPerson = {name:"ola", age:12}; //Type 'number' is not assignable to type 'never'

interface IPerson extends Person {
    // ~~~~~~~ Interface 'IPerson' incorrectly extends interface 'Person'.
    // Types of property 'age' are incompatible.
    // Type 'number' is not assignable to type 'string'.
    age: number;
}
/**
 * It’s fine to change the type of a property in a subtype, so long it’s
compatible with the base type (see Item 7). Generally you want more safety
checks, so this is a good reason to use extends with interfaces.
 */


//3. Type aliases are the natural way to express tuple and array types:
type Pair = [a: number, b: number];
type StringList = string[];
type NamedNums = [string, ...number[]];

/**
 * 
 * declaration merging 
 * 
An interface does have some abilities that a type doesn’t, however. One
of these is that an interface can be augmented. Going back to the State
example, you could have added a population field in another way:
 */
interface IState {
name: string;
capital: string;
}
interface IState {
population: number;
}
const wyoming: IState = {
name: 'Wyoming',
capital: 'Cheyenne',
population: 578_000
}; // OK