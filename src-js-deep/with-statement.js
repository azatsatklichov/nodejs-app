

/**
 * The with statement in JavaScript allows for simplified access to object 
 * properties by establishing a default object scope. While it can reduce code 
 * repetition, it is generally discouraged due to potential confusion and negative 
 * impacts on code maintainability and performance.
 * https://www.geeksforgeeks.org/javascript/javascript-with-statement/
 * 
 * 
 */



//in other way 
foo; // unqualified identifier
foo.bar; // bar is a qualified identifier
const foo = { bar: 1 };
console.log(foo.bar);
// foo is found in the scope chain as a variable;
// bar is found in foo as a property

/**
 * The with statement adds the given object to the head of this scope chain during 
 * the evaluation of its statement body. Every unqualified name would first be 
 * searched within the object (through a in check) before searching in the upper scope chain.

Note that if the unqualified reference refers to a method of the object, 
the method is called with the object as its this value.
 */
with ([1, 2, 3]) {
    console.log(toString()); // 1,2,3
}



/**
 * with Statement
JavaScript has a with statement that was intended to provide a shorthand when
accessing the properties of an object. Unfortunately, its results can sometimes be
unpredictable, so it should be avoided.
 */
obj = {}
with (obj) {
    a = b;
}

//does the same thing as:
if (obj.a === undefined) {
    a = obj.b === undefined ? b : obj.b;
} else {
    obj.a = obj.b === undefined ? b : obj.b;
}
//So, it is the same as one of these statements:
a = b;
a = obj.b;
obj.a = b;
obj.a = obj.b;

/**
 * 
 * It is not possible to tell from reading the program which of those statements youwill
get. It can vary from one running of the program to the next. 

It can even vary while
the program is running. If you can’t read a program and understand what it is going
to do, it is impossible to have confidence that it will correctly do what you want.
Simply by being in the language, the with statement significantly slows down JavaScript
processors because it frustrates the lexical binding of variable names. 

It was well intentioned,
but the language would be better if it didn’t have it.
 */
