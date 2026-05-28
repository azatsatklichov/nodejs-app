
'primitive'.charAt(3); //"autoboxing"
/**
 * But things are not quite as they seem. There’s actually something surprising
and subtle going on here. While a string primitive does not have methods,
JavaScript also defines a String object type that does. JavaScript freely
converts between these types. When you access a method like charAt on a
string primitive, JavaScript wraps it in a String object, calls the method,
and then throws the object away. 

This is a bit like how JavaScript wraps a number primitive 
in a Number object when you access methods on it.
This is a feature of JavaScript called "autoboxing".
 */

//You can observe this if you monkey-patch String.prototype
// Don't do this!
const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function(pos) {
  console.log(this, typeof this, pos);
  return originalCharAt.call(this, pos);
};
console.log('primitive'.charAt(3));

/**
 * The this value in the method is a String object wrapper, not a string
primitive. You can instantiate a String object directly and it will
sometimes behave like a string primitive. But not always. For example, a
String object is only ever equal to itself:
 */
"hello" === new String("hello"); //false
new String("hello") === new String("hello"); //false 


/**
 * The implicit conversion to object wrapper types explains an odd
phenomenon in JavaScript—if you assign a property to a primitive, it
disappears:


Now you know the explanation: x is converted to a String instance, the
language property is set on that, and then the object (with its language
property) is thrown away.
 */
let xx = "hello" //'hello'
// JavaScript wraps the string primitive in a String object, 
// assigns the property, and then discards the object wrapper, 
// leaving the primitive unchanged
xx.language = 'English'; //'English'
xx.language //undefined





function getStringLen(foo: String) {
  return foo.length;
}

getStringLen("hello");  // OK
getStringLen(new String("hello"));  // OK

/**
 * But things go awry when you try to pass a String object to a method that
expects a string:
 */
function isGreeting(phrase: RString) {
  return ['hello', 'good day'].includes(phrase);
    // Argument of type 'String' is not assignable to parameter of type 'string'.
  // 'string' is a primitive, but 'String' is a wrapper object.
  // Prefer using 'string' when possible.

  /**
   So string is assignable to String, but String is not assignable to string.
Confusing? 

 
Yes. The reason is that string is a primitive type, while String is an object type.
The string type represents the primitive string values, 
while the String type represents the wrapper object for strings. 
When you use a string literal like "hello", it is of type string, 
and it can be assigned to a variable of type String because of the implicit conversion. 
However, when you create a new String object using new String("hello"), 
it is of type String, and it cannot be assigned to a variable 
of type string without an explicit conversion.
    

Follow the advice in the error message and stick with string.
All the type declarations that ship with TypeScript use it, as do the typings
for almost all other libraries.
Another way you can wind up with wrapper objects is if you provide an
explicit type annotation with a capital letter:
*/

let greeting: String = "hello"; // OK, but not recommended
greeting = new String("hello"); // OK, but not recommended

/**
 * Another way you can wind up with wrapper objects is if you provide an
explicit type annotation with a capital letter:

They are still primitives, not objects. But
TypeScript permits these declarations because the primitive types are
assignable to the object wrappers. These annotations are both misleading
and redundant (Item 18). Better to stick with the primitive types.

They are still primitives, not objects. But
TypeScript permits these declarations because the primitive types are
assignable to the object wrappers. These annotations are both misleading
and redundant (Item 18). Better to stick with the primitive types.
 */
const s: String = "primitive";
const n: Number = 12;
const b: Boolean = true;

/**
 * As a final note, it’s fine to call BigInt and Symbol without new, since these
create primitives:

These are the BigInt and Symbol values, not the TypeScript types

If you use typescript-eslint in your project, the ban-types rule
prohibits the use of object wrapper types. This is enabled with the
@typescript-eslint/recommended configuration
 */
typeof BigInt(1234) //'bigint'
typeof Symbol('sym') //'symbol'

