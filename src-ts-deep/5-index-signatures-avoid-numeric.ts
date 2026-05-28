/**
 * JavaScript is a famously quirky (uniqueness) language. Some of the most notorious
quirks involve implicit type coercions:

These can usually be avoided by using === and !== instead of their more
coercive cousins.
 */ 
console.log("0" == 0); // true 



/**
 * What is an object? In JavaScript it’s a collection of key/value pairs. The
keys are usually strings (in ES2015 and later they can also be symbols). The
values can be anything.

This is more restrictive than what you find in many other languages.
JavaScript does not have a notion of “hashable” objects like you find in
Python or Java. 

If you try to use a more complex object as a key, it is
converted into a string by calling its toString method:

x = {}
{}
> x[[1, 2, 3]] = 2
2
> x
{ '1,2,3': 2 }

In particular, numbers cannot be used as keys. If you try to use a number as
a property name, the JavaScript runtime will convert it to a string:

{ 1: 2, 3: 4}
{ '1': 2, '3': 4 }


So what are arrays, then? They are certainly objects:
> typeof []
'object'


And yet it’s quite normal to use numeric indices with them:
> x = [1, 2, 3]
[ 1, 2, 3 ]
> x[0]
1


Are these being converted into strings? In one of the oddest quirks of all,
the answer is “yes.” You can also access the elements of an array using
string keys:

> x['1']
2


If you use Object.keys to list the keys of an array, you get strings back:
> Object.keys(x)
[ '0', '1', '2' ]
 */ 

/**
 * TypeScript models this by allowing numeric keys and distinguishing
between these and strings. If you dig into the type declarations for Array
(Item 6), you’ll find this in lib.es5.d.ts:
 */ 
interface Array<T> {
  // ...
  [n: number]: T;
}

/**
  
This is purely a fiction—string keys are accepted at runtime as the
ECMAScript standard dictates that they must—but it is a helpful one that
can catch mistakes:
 */
const xs = [1, 2, 3];
const x0 = xs[0];  // OK
const x1 = xs['1'];  // stringified numeric constants are also OK


const inputEl = document.getElementsByTagName('input')[0];
const xN = xs[inputEl.value];
//            ~~~~~~~~~~~~~ Index expression is not of type 'number'.

/**
 * While the fiction of numeric keys is helpful, it’s important to remember that
it is just a fiction. Like all aspects of TypeScript’s type system, it is erased
at runtime (Item 3). This means that constructs like Object.keys still
return strings:
 */
const keys = Object.keys(xs);
//    ^? const keys: string[] 

/**
 * 
 The pattern here is that a number index signature means that what you put
in generally has to be a number, but what you get out is a string.

    * This is a common pattern in JavaScript APIs. For example, 
the DOM API has a lot of array-like objects that have numeric index signatures, 
but their keys are actually strings at runtime.

    * If you want to model this pattern in your own code, you can use an index 
signature with a number key and a string value. For example, you might have 
a type that represents a mapping from numeric IDs to string names:
 */

function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
  if (i >= 0 && i < xs.length) {
    return xs[i];
  }
  throw new Error(`Attempt to access ${i} which is past end of array.`)
}


const tupleLike: ArrayLike<string> = {
  '0': 'A',
  '1': 'B',
  length: 2,
};  // OK

