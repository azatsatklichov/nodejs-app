var obj = { inner: { x: 0 } };
obj.inner = { x: 1 };
// ~~~~~ Cannot assign to 'inner' because it is a read-only property
obj.inner.x = 1; // OK
console.log(obj);
var myDeepReadonlyObject = {
    B: { C: 1 },
    D: [{ E: 2 }],
};
myDeepReadonlyObject.B = { C: 2 }; // error :)
myDeepReadonlyObject.B.C = 2; // error :)
//second issue
/**
 * The second caveat about Readonly is that it only affects properties. If you
apply it to a type with methods that mutate the underlying object, it won’t
remove them
 */
var date = new Date();
date.setFullYear(2037); // OK, but mutates date!
//use readonly
//The readonly keyword can prevent arrays from being changed. 
var names = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
//Type Inference TypeScript can infer the type of an array if it has values.
var numbers2 = [1, 2, 3]; // inferred to type number[]
numbers2.push(4); // no error 
// comment line below out to see the successful assignment
numbers2.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers2[0]; // no error
//Also, note that you can assign a mutable array to a readonly array, but not vice versa:
var aa = [1, 2, 3];
var bb = aa;
var cc = bb;
// ~ Type 'readonly number[]' is 'readonly' and cannot be
// assigned to the mutable type 'number[]'
