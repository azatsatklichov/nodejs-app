

console.log('\n\n  Inheritance  ')
/**
 * Inheritance is an important topic in most programming languages.
 * 
In the classical languages (such as Java), inheritance (or extends) provides two useful
services. 

First, it is a form of code reuse. If a new class is mostly similar to an existing
class, youonly have to specify the differences. Patterns of code reuse are extremely
important because they have the potential to significantly reduce the cost of software
development. 

The other benefit of classical inheritance is that it includes the
specification of a system of types. This mostly frees the programmer from having to
write explicit casting operations, which is a very good thing because when casting,
the safety benefits of a type system are lost.

JavaScript, being a loosely typed language, never casts. The lineage of an object is
irrelevant. What matters about an object is what it can do, not what it is descended
from.

JavaScript provides a much richer set of code reuse patterns. It can ape the classical
pattern, but it also supports other patterns that are more expressive. The set of possible
inheritance patterns in JavaScript is vast. In
 */


console.log('Pseudoclassical')
/**
 * The pseudoclassical form can provide comfort to programmers who are unfamiliar
with JavaScript, but it also hides the true nature of the language.


JavaScript is conflicted about its prototypal nature. Its prototype mechanism is
obscured by some complicated syntactic business that looks vaguely classical.
Instead of having objects inherit directly from other objects, an unnecessary level of
indirection is inserted such that objects are produced by constructor functions.

When a function object is created, the Function constructor that produces the function
object runs some code like this:

this.prototype = {constructor: this};

The new function object is given a prototype property whose value is an object containing
a constructor property whose value is the new function object.

The prototype object is the place where inherited traits are to be deposited. Every function
gets a prototype object because the language does not provide a way of determining
which functions are intended to be used as constructors. 

The constructor property is not useful. It is the prototype object that is important.

When a function is invoked with the constructor invocation pattern using the new
prefix, this modifies the way in which the function is executed. If the new operator
were a method instead of an operator, it could have been implemented like this:
 */


Function.prototype.method = function (name, func) { //Function.method('new', function ( ) { .. })
    this.prototype[name] = func;
    // Create a new object that inherits from the
    // constructor's prototype.
    var that = Object.create(this.prototype);
    // Invoke the constructor, binding –this- to
    // the new object.
    var other = this.apply(that, arguments);
    // If its return value isn't an object,
    // substitute the new object.
    return (typeof other === 'object' && other) || that;
};

//We can define a constructor and augment its prototype:
var Mammal = function (name) {
    this.name = name;
};
Mammal.prototype.get_name = function () {
    return this.name;
};

Mammal.prototype.says = function () {
    return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name(); // 'Herb the Mammal'
console.log(name);




console.log('\n\n Object Specifiers')
/**
 * It sometimes happens that a constructor is given a very large number of parameters.
This can be troublesome because it can be very difficult to remember the order of the
arguments. In such cases, it can be much friendlier if we write the constructor to
accept a single object specifier instead.
 */
function maker(f, l, m, c, s) { }
var f, l, m, c, s;
var myObject = maker(f, l, m, c, s);
//we can write:
var myObject = maker({
    first: f,
    last: l,
    state: s,
    city: c
});
/**
 * The arguments can now be listed in any order, arguments can be left out if the constructor
is smart about defaults, and the code is much easier to read.
This can have a secondary benefit when working with JSON (see Appendix E).
 */





console.log('\n\n Prototypal')
/**
 * In a purely prototypal pattern, we dispense with classes. We focus instead on the
objects. Prototypal inheritance is conceptually simpler than classical inheritance: a
new object can inherit the properties of an old object. This is perhaps unfamiliar, but
it is really easy to understand. You start by making a useful object. You can then
make many more objects that are like that one. The classification process of breaking
an application down into a set of nested abstract classes can be completely
avoided.
 */

//Let’s start by using an object literal to make a useful object:
var myMammal = {
    name: 'Herb the Mammal',
    get_name: function () {
        return this.name;
    },
    says: function () {
        return this.saying || '';
    }
};


//Once we have an object that we like, we can make more instances with the Object. We can then customize the new instances:
console.log('This is differential inheritance. By customizing a new object, we specify the differences from the object on which it is based')
var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myCat.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log(myCat.purr(5))



console.log('Sometimes is it useful for data structures to inherit from other data structures. Here is an example:')
/**
 * Here
is an example: Suppose we are parsing a language such as JavaScript or TEX in which
a pair of curly braces indicates a scope. Items defined in a scope are not visible outside
of the scope. In a sense, an inner scope inherits from its outer scope. JavaScript
objects are very good at representing this relationship. The block function is called
when a left curly brace is encountered. The parse function will look up symbols from
scope, and augment scope when it defines new symbols:
 */
var block = function () {
    // Remember the current scope. Make a new scope that
    // includes everything from the current one.
    var oldScope = scope;
    scope = Object.create(scope);
    // Advance past the left curly brace.
    advance('{');
    // Parse using the new scope.
    parse(scope);
    // Advance past the right curly brace and discard the
    // new scope, restoring the old one.
    advance('}');
    scope = oldScope;
};






console.log('\n\n Functional - functional constructor')
/**
 * One weakness of the inheritance patterns we have seen so far is that we get no privacy.
All properties of an object are visible. 

We get no private variables and no
private methods. Sometimes that doesn’t matter, but sometimes it matters a lot. In
frustration, some uninformed programmers have adopted a pattern of pretend
privacy. If they have a property that they wish to make private, they give it an oddlooking
name, with the hope that other users of the code will pretend that they cannot
see the odd looking members. Fortunately, we have a much better alternative in
an application of the module pattern.

//Here is a pseudocode template for a functional constructor (boldface text added for emphasis):
var constructor = function (spec, my) {
var that, other private instance variables;
my = my || {};
Add shared variables and functions to my
that = a new object;
Add privileged methods to that
return that;
};

 */

