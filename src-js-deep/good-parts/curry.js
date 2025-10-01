
/**
 * 
 * Curry
Functions are values, and we can manipulate function values in interesting ways.
Currying allows us to produce a new function by combining a function and an
argument:

var add1 = add.curry(1);
document.writeln(add1(6)); // 7

add1 is a function that was created by passing 1 to add’s curry method. The add1
function adds 1 to its argument. JavaScript does not have a curry method, but we
can fix that by augmenting Function.prototype:

Function.method('curry', function ( ) {
var args = arguments, that = this;
return function ( ) {
return that.apply(null, args.concat(arguments));
};
}); // Something isn't right...

The curry method works by creating a closure that holds that original function and
the arguments to curry. It returns a function that, when invoked, returns the result of
calling that original function, passing it all of the arguments from the invocation of
curry and the current invocation. It uses the Array concat method to concatenate the
two arrays of arguments together.
 */

//https://gist.github.com/donnut/fd56232da58d25ceecf1

const test = (a, b) => b + " " + a;
test("I am arg1", " I am arg2"); // I am arg1 I am arg2

//  Currying is basically the fact of nesting returning functions and be able to partially consume a function.
const curr = (a) => (b) => b + " " + a;
curr("I am arg1")(" I am arg2"); // I am arg1 I am arg2

//const compute = (a: number, f: (x:number) => number) : number => f(a);

const square = (a) => {
  let res = a * a;
  console.log(res);
  return res;
}; 