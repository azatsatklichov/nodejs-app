;
var alice = { name: 'Alice' }; //type annotation
var bob = { name: 'Bob' }; //type assertion (a.k.a casting, avoid this term)   
var ole = { name: 'Bob' };
var alice2 = { name: 'Alice', id: 3434 };
var bob2 = { name: 'Bob', id: 3434 };
;
/**
 *
It can be tricky to use a type annotation with arrow functions. What if you
wanted to use the named Person interface in this code?
 */
var people1 = ['alice', 'bob', 'jan'].map(function (name) { return ({ name: name }); });
// { name: string; }[]... but we want Perzon[]
console.log(people1);
//It’s tempting to use a type assertion here, and it seems to solve the problem:
var people2 = ['alice', 'bob', 'jan'].map(function (name) { return ({ name: name }); }); // Type is Person[]
console.log(people2);
//But this suffers from all the same issues as a more direct use of type
//assertions. For example:
var people3 = ['alice', 'bob', 'jan'].map(function (name) { return ({}); });
// NO ERROR 
console.log(people3);
/**
 * So how do you use a type annotation in this context instead? The most
straightforward way is to declare a variable in the arrow function:
 */
var people4 = ['alice', 'bob', 'jan'].map(function (name) {
    var person = { name: name };
    return person;
}); // Type is Person[]
/**
    * But this introduces considerable noise compared to the original code. A
more concise way is to annotate the return type of the arrow function:

This performs all the same checks on the value as the previous version. The
parentheses are significant here! (name): Person allows the type of name
to be inferred and specifies that the return type should be Person
*/
var people5 = ['alice', 'bob', 'jan'].map(function (name) { return ({ name: name }); }); // Type is Person[]
/**
 * In this case you could have also written the final desired type and let
TypeScript check the validity of the assignment:
 */
var people6 = ['alice', 'bob', 'jan'].map(function (name) { return ({ name: name }); }); // OK
//Casting doesn't actually change the type of the data within the variable. See TS-Casting
var x = 9;
console.log(x.length); //undefined, since number has no length, BUT no error shown
var x2 = 'nine';
console.log(x2.length); //4
var x3 = '9';
console.log(x3.toExponential); //undefined, since number has no length, BUT no error shown
console.log(x3.length); //undefined, since number has no length, BUT no error shown
