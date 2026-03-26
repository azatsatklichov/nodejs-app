
//Bit operators work on 32 bits numbers.

x = 5;// Assign 5 to x
///some logic
var x;

// In javascript bitwise operators convert their arguments to 32bit signed values.
var rgba = 0xFFFFFFFF;
console.log((rgba&0xFF000000)>>24);

const a = 5;     // 0000000000000101
const b = -3;    // 1111111111111101

console.log(~a); // 1111111111111010
// expected output: -6

console.log(~b); // 0000000000000010
// expected output: 2
