/**
 * A tuple type combines a set of numerically named properties with the members of an array type.
 */
let tuple: [number, string] = [123, "Broadcom"];
console.log(tuple[0] + " = " + tuple[1]);
tuple[0] = 33;
tuple[1] = "sdd23";

//tuple[3]  = 22;

var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable
var employee: [number, string] = [1, "Steve"];

var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
