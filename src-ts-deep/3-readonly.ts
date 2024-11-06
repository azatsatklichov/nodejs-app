
interface Outer {
    inner: {
        x: number;
    }
}
const obj: Readonly<Outer> = { inner: { x: 0 } };
obj.inner = { x: 1 };
// ~~~~~ Cannot assign to 'inner' because it is a read-only property
obj.inner.x = 1; // OK
console.log(obj)

//You can create a type alias and then inspect it in your editor to see exactly what’s happening
type T = Readonly<Outer>;
// ^? type T = {
// readonly inner: {
// x: number;
// };
// }


//try your own DeepReadOnly, or use ts-essentials  DeepReadonly type
type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

interface A {
    B: { C: number; };
    D: { E: number; }[];
}

const myDeepReadonlyObject: DeepReadonly<A> = {
    B: { C: 1 },
    D: [{ E: 2 }],
}

myDeepReadonlyObject.B = { C: 2 }; // error :)
myDeepReadonlyObject.B.C = 2; // error :)

//second issue
/**
 * The second caveat about Readonly is that it only affects properties. If you
apply it to a type with methods that mutate the underlying object, it won’t
remove them
 */
const date: Readonly<Date> = new Date();
date.setFullYear(2037); // OK, but mutates date!


//you can add
const myArr2:   Array<string>  = new Array(2);
myArr2.push('3');
//you can make it readonly
const myArr: Readonly<Array<string>> = new Array(2);
myArr.push //Property 'push' does not exist on type 'readonly string[]' 
 

/**
 * If you want both a mutable and immutable version of a class, you’ll
generally need to separate them yourself.
 */
interface Array<T> {
    length: number;
    // (non-mutating methods)
    toString(): string;
    join(separator?: string): string;
    // ...
    // (mutating methods)
    pop(): T | undefined;
    shift(): T | undefined;
    // ...
    [n: number]: T;
}
// And here’s the corresponding immutable version, ReadonlyArray<T>:
/**
 * The key differences are that the mutating methods (such as pop and shift)
aren’t defined on ReadonlyArray, and the two properties, length and the
index type ([n: number]: T), have readonly modifiers. This prevents
resizing the array and assigning to elements in the array. (number as an
index type isn’t something you should use in your own code; see Item 17.)
 */
interface ReadonlyArray<T> {
    readonly length: number;
    // (non-mutating methods)
    toString(): string;
    join(separator?: string): string;
    // ...
    readonly [n: number]: T;
}



//use readonly

//The readonly keyword can prevent arrays from being changed. 
const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

//Type Inference TypeScript can infer the type of an array if it has values.
const numbers2 = [1,2,3];// inferred to type number[]
numbers2.push(4); // no error 
// comment line below out to see the successful assignment
numbers2.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let headz: number = numbers2[0]; // no error


//Also, note that you can assign a mutable array to a readonly array, but not vice versa:
const aa: number[] = [1, 2, 3];
const bb: readonly number[] = aa;
const cc: number[] = bb;
// ~ Type 'readonly number[]' is 'readonly' and cannot be
// assigned to the mutable type 'number[]'



