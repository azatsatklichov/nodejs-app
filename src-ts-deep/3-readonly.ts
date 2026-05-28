
function arraySum(arr: number[]) {
    let sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
        sum += num;
    }
    return sum;
}
//code to print the triangular numbers (1, 1 + 2 = 3, 1 + 2 + 3 = 6, etc.):
function printTriangles(n: number) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
        //this is a bug, because arraySum modifies nums by emptying it, so the next time we call arraySum(nums), nums is empty and we get 0.
        console.log(arraySum(nums));
    }
}

//when you run this code, you might expect it to print 
// the first five triangular numbers, but instead it prints: 0 1 2 3 4
/**
 * This function does calculate the sum of the numbers in the array. But it also
has the side effect of emptying the array! TypeScript is fine with this,
because JavaScript arrays are mutable. The problem is that
printTriangles made an assumption about arraySum, namely that it
doesn’t modify nums.

Mutation is the root cause of many hard-to-find bugs. Mutable is the default
in JavaScript, but TypeScript’s readonly modifier can help you catch and
prevent surprise mutations. Because it can prevent such a pernicious set of
bugs, it’s worth learning how to use this feature in your own code.

JavaScript primitives are already immutable. There are no methods on
string, number, or boolean that will mutate these values. 

But objects and arrays are mutable by default. 
You can change the properties of an object or the elements of an array 
after they’ve been created. This is often useful, but it can also lead 
to bugs if you accidentally modify something that you didn’t intend to.
*/
printTriangles(5);


//readonly properties and immutability
interface Lockbox {
    code: number;
}
interface ReadonlyLockbox {
    readonly code: number;
}

const box: Lockbox = { code: 4216 };
const robox: ReadonlyLockbox = { code: 3625 };
box.code = 1234;  // ok
robox.code = 1234;
//    ~~~~ Cannot assign to 'code' because it is a read-only property.



//Typically, you’ll want to prevent assignments to some properties on an object
interface PartlyMutableName {
    readonly first: string;
    last: string;
}

const jackie: PartlyMutableName = { first: 'Jacqueline', last: 'Kennedy' };
jackie.last = 'Onassis';  // OK
jackie.first = 'Jacky';
//     ~~~~~ Cannot assign to 'first' because it is a read-only property.


interface FullyMutableName {
    first: string;
    last: string;
}
// which you can do with the Readonly<T> utility type:
type FullyImmutableName = Readonly<FullyMutableName>;
//   ^? type FullyImmutableName = {
//        readonly first: string;
//        readonly last: string;
//      }

const jackie2: FullyImmutableName = { first: 'Jacqueline', last: 'Kennedy' };
jackie2.first = 'Jacky'; // Error: Cannot assign to 'first' because it is a read-only property
jackie2.last = 'Jacky'; // Error: Cannot assign to 'last' because it is a read-only property




//SHALLOW READONLY
/**
 * There are two important caveats to know about with the readonly property
modifier and Readonly<T>. 

The first is that they are shallow. Just like a
const declaration, a readonly property cannot be reassigned but it can be
mutated:
 */

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


/**
 * If you want to make a type deeply immutable, you’ll need to write your 
 * own DeepReadonly type, which recursively applies Readonly to all properties 
 * of an object.
 * 
 * The important thing to note is that there’s a readonly modifier on inner
but not on x. There is no built-in support for deep readonly types, but it is
possible to write a generic type to produce them. Getting this right is tricky,
so I recommend using a library rather than rolling your own. The
DeepReadonly generic in ts-essentials is one implementation.
 */

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




/**
 * If you want both a mutable and immutable version of a class, you’ll
generally need to separate them yourself. A great example of this in the
standard library is the Array and ReadonlyArray interfaces. Here’s what
Array<T> looks like (in lib.es5.d.ts):
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


/**
 * The key differences are that the mutating methods (such as pop and shift)
aren’t defined on ReadonlyArray, and the two properties, length and the
index type ([n: number]: T), have readonly modifiers. This prevents
resizing the array and assigning to elements in the array. (number as an
index type isn’t something you should use in your own code; 
 */
interface ReadonlyArray<T> {
    readonly length: number;
    // (non-mutating methods)
    toString(): string;
    join(separator?: string): string;
    // ...
    readonly [n: number]: T;
}


//So you can assign a mutable array to a readonly array, but not vice versa:
const al: number[] = [1, 2, 3];
const bl: readonly number[] = al;
const cl: number[] = bl;
// ~ Type 'readonly number[]' is 'readonly' and cannot be
// assigned to the mutable type 'number[]'



/**
 * Now improve above printTriangles function by using readonly arrays, 
 * so that the compiler can catch the bug for us.
 * @param n 
 */
function printTriangles2(n: number) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum2(nums as readonly number[]));
        //                   ~~~~~~~~~~~~~~~~~~~~~~~~~
        // The type 'readonly number[]' is 'readonly' and cannot be
        // assigned to the mutable type 'number[]'.
    }
}

function arraySum2(arr: readonly number[]) {
    let sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
        //              ~~~ 'pop' does not exist on type 'readonly number[]'
        sum += num;
    }
    return sum;
}

//We can fix the type error in arraySum by not mutating the array:
function arraySum3(arr: readonly number[]) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}



//you can add
const myArr2: Array<string> = new Array(2);
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
const numbers2 = [1, 2, 3];// inferred to type number[]
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



