
//empty set - never type
const ii: never = 12;
//    ~ Type 'number' is not assignable to type 'never'.
 


//string literals - acts like distinct types  
let mr : 'Mister'; //type of variable
let mr1: 'Mister' = 'Mister';
let mr2: 'Mister' = 'Madam'; // err
//gives enum like behavior, e.g. to finite values
let mr3: 'Mister' | 'Madam' = 'Madam';
let mr4: 'Mister' | 'Madam' = 'Miss';//err


//type aliases
let mr5: 'Mister' | 'Madam' | 'Miss' = 'Miss';
type mrCategory= 'Mister' | 'Madam' | 'Miss';
let mr6: mrCategory= 'Madam';
let mr7: mrCategory= 'Madam';
let mr8: mrCategory= 'Mrs'; // err - is not assignable to type



//set with single value - string literal type
type A = 'A';
type B = 'B';
type Twelve = 12;
 

//set with multiple values (2, or 3 or more) - union of string literals 
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12; 

const mm: AB12 = Math.random() < 0.5 ? 'A' : 12; // OK, 'A' | 12 is a subset of 'A' | 'B' | 12


// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab;  // OK, {"A", "B"} is a subset of {"A", "B", 12}

/**
 * The word “assignable” appears in many TypeScript errors. In the context of
sets of values, it means either “member of” (for a relationship between a
value and a type) or “subset of” (for a relationship between two types):
 */
const a: AB = 'A';  // OK, value 'A' is a member of the set {'A', 'B'}
const c: AB = 'C';
//    ~ Type '"C"' is not assignable to type 'AB', or 'C' is not a member of the set {'A', 'B'}


declare let twelve: AB12;
const back: AB = twelve;
//    ~~~~ Type 'AB12' is not assignable to type 'AB'
//           Type '12' is not assignable to type 'AB'


/**
 * The sets for these types are straightforward to reason about because they are
finite. You can compare the elements one by one. But most types that you
work with in practice have infinite domains. Reasoning about these can be
harder. You can think of them as either being built by listing out their
elements:
 */
type Int = 1 | 2 | 3 | 4 | 5 // | ...


/** or by describing them with a property that all their elements share:
 * Think of this interface as a description of the values in the domain of its
type. Is the value an object? Does it have an id property whose value is
assignable to string? Then it’s an Identified.
 * */
interface Identified {
  id: string;
}

