//arrays
var arr1 = ['a', 'b', 'c'];
var arr2 = ['a', 'b', 'c'];
var arr3 = ['a', true, 23];
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function (num) { return num * 2; });
console.log(doubled); // [2, 4, 6, 8, 10]
var evens = numbers.filter(function (num) { return num % 2 === 0; });
console.log(evens); // [2, 4]
var sum = numbers.reduce(function (total, num) { return total + num; }, 0);
console.log(sum); // 15
/**
 * A tuple type combines a set of numerically named properties with the members of an array type.
 */
var empId = 1;
console.log(empId);
var empName = "Steve"; //const empName: string = "Steve" // Type string trivially inferred from a string literal, remove type annotation
console.log(empName);
// Tuple type variable
var emp = [1, "Steve"];
console.log(emp);
var emp2 = ["Steve", 1];
console.log(emp2);
var person = [1, "Steve", true];
console.log(person);
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(user);
user = [1, "d", true, 34, "ok"];
var tuple = [123, "Broadcom"];
console.log(tuple[0] + " = " + tuple[1]); //123 = Broadcom
tuple[0] = 33;
tuple[1] = "sdd23";
console.log(tuple[0] + " = " + tuple[1]); //33 = sdd23
//tuple[2] = 22; //Tuple type '[number, string]' of length '2' has no element at index '2'
//BUT
tuple.push(2);
//tuple[3] = "sdd23";//Tuple type '[number, string]' of length '2' has no element at index '3'
//BUT
tuple.push(3);
console.log(tuple); //[ 33, 'sdd23', 2, 3 ]
//HOW to SOLVE push-by-pass issue, use READONLY
var tupleR = [11111, "Broadcom"];
//tupleR[2] = 22; // Index signature in type 'readonly [number, string]' only permits reading.t
// 
tupleR.push(2); //Property 'push' does not exist on type 'readonly [number, string]'.ts(2339) - ONLY COMPILE TIME
console.log(tupleR); //[ 11111, 'Broadcom', 2 ]
console.log(' -- We have no type safety in our tuple for indexes starting from  N+ ---');
console.log();
/**
 * Thinking of types as sets can also clarify the relationships between arrays
and tuples.

 */
var list = [1, 2];
// ^? const list: number[]
var tuple2 = list;
var n8 = [323, 32, 434];
//Type '[number, number, number]' is not assignable to type 'coord'.
//  Source has 3 element(s) but target allows only 2
n8.push(333332); //no control mechanism yet
console.log(n8); //[ 323, 32, 434, 333332 ]
var coord2 = [1, 22];
var coord3 = [1, 22, "ola"];
/**
 * Is a triple assignable to a pair? Thinking in terms of structural typing, you
might expect it to be. A pair has 0 and 1 keys, so mightn’t it have others,
too, like 2?
 */
var triple = [1, 2, 3];
var double = triple;
var myNamedTuples = [latitude = 23, altitude = 232];
//YOU can add elements to tuples with PUSH, it spoils its structure
///// instead use our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding day off');
