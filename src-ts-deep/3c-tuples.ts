/**
 * A tuple type combines a set of numerically named properties with the members of an array type.
 */
const tuple: [number, string] = [123, "Broadcom"];
console.log(tuple[0] + " = " + tuple[1]);
tuple[0] =  33;
tuple[1] = "sdd23";

//tuple[2] = 22;
//tuple[3] = "sdd23";

//tuple[3]  = 22;

const empId = 1;
console.log(empId);
const empName = "Steve"; //const empName: string = "Steve" // Type string trivially inferred from a string literal, remove type annotation
console.log(empName);

// Tuple type variable
const emp: [number, string] = [1, "Steve"];
console.log(emp);

const emp2: [number, string] = [1, "Steve"];
console.log(emp2);

const person: [number, string, boolean] = [1, "Steve", true];
console.log(person);

let user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(user);
user = [1,"d", true, 34, "ok"];
