;
/**
It can be tricky to use a type annotation with arrow functions. What if you
wanted to use the named Person interface in this code?
 */
var people1 = ['alice', 'bob', 'jan'].map(function (name) { return ({ name: name }); });
// { name: string; }[]... but we want Perzon[]
console.log(people1);
//It’s tempting to use a type assertion here, and it seems to solve the problem:
var people2 = ['alice', 'bob', 'jan'].map(function (name) { return ({ name: name }); }); // Type is Person[]
console.log(people2);
