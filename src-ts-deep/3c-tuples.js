/**
 * A tuple type combines a set of numerically named properties with the members of an array type.
 */
var tuple = [123, "Broadcom"];
console.log(tuple[0] + " = " + tuple[1]);
tuple[0] = 33;
tuple[1] = "sdd23";
//tuple[2] = 22;
//tuple[3] = "sdd23";
//tuple[3]  = 22;
var empId = 1;
console.log(empId);
var empName = "Steve"; //const empName: string = "Steve" // Type string trivially inferred from a string literal, remove type annotation
console.log(empName);
// Tuple type variable
var emp = [1, "Steve"];
console.log(emp);
var emp2 = [1, "Steve"];
console.log(emp2);
var person = [1, "Steve", true];
console.log(person);
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(user);
user = [1, "d", true, 34, "ok"];
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
console.log(n8);
var coord2 = [1, 22];
var coord3 = [1, 22, "ola"];
/**
 * Is a triple assignable to a pair? Thinking in terms of structural typing, you
might expect it to be. A pair has 0 and 1 keys, so mightn’t it have others,
too, like 2?
 */
