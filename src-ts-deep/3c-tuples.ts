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



/**
 * Thinking of types as sets can also clarify the relationships between arrays
and tuples.

 */
const list = [1, 2];
// ^? const list: number[]
const tuple2: [number, number] = list;
// ~~~~~ Type 'number[]' is not assignable to type '[number, number]'
// Target requires 2 element(s) but source may have fewer
//e.g. The empty list and the list [1] are examples

//is tuple fixed-array?  YES,...  
type coord = [number, number]; 
let n8:coord = [323,32,434];
//Type '[number, number, number]' is not assignable to type 'coord'.
//  Source has 3 element(s) but target allows only 2
n8.push(333332); //no control mechanism yet
console.log(n8); //[ 323, 32, 434, 333332 ]

const coord2: [number, number] = [1, 22];
const coord3: [number, number, string] = [1, 22, "ola"];

type arr = number[]; //not fixed array

/**
 * Is a triple assignable to a pair? Thinking in terms of structural typing, you
might expect it to be. A pair has 0 and 1 keys, so mightn’t it have others,
too, like 2?
 */
const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
// ~~~~~~ '[number, number, number]' is not assignable to '[number, number]'
// Source has 3 element(s) but target allows only 2.



//Labels in tuples - Named TUPLE
//Getting lat/long coordinates mixed up could be catstrophic!
type NamedCoordz = [
    latitude: number,
    altitude: number
];

const myNamedTuples: NamedCoordz = [latitude = 23, altitude = 232];


//YOU can add elements to tuples with PUSH, it spoils its structure
///// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding day off');
