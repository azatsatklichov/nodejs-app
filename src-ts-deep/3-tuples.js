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
