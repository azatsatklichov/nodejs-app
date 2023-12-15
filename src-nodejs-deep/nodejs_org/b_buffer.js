//https://www.geeksforgeeks.org/node-js-buffer-complete-reference/

/**
 * Buffers are instances of the Buffer class in Node.js.
 * Buffers are designed to handle binary raw data.
 * Buffers allocate raw memory outside the V8 heap.
 * Buffer class is a global class so it can be used without importing the Buffer
 * module in an application.
 */

var ubuf = Buffer.alloc(5);
//var abuf = new Buffer([16, 32, 48, 64]);
//var sbuf = new Buffer("GeeksforGeeks", "ascii");

//buf.write( string, offset, length, encoding )
//var cbuf = new Buffer(256);// Buffer() is deprecated due to security and usability issues.
var cbuf = Buffer.alloc(256);
bufferlen = cbuf.write("Learn Programming with GeeksforGeeks!!!");
console.log("No. of Octets in which string is written : " + bufferlen);

var rbuf = Buffer.alloc(26);
var j;

for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
  rbuf[j] = i;
}
console.log(rbuf);
console.log(rbuf.toString("ascii"));

for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
  rbuf[j] = i;
}

console.log(rbuf.toString("utf-8", 3, 9));

// Node.js program to demonstrate the
// Buffer.copy() Method

// Creating a buffer
var buffer2 = Buffer.from("for");
var buffer1 = Buffer.from("GeeksandGeeks");

buffer2.copy(buffer1, 5, 0);
console.log(buffer1.toString());

var buffer2 = Buffer.allocUnsafe(5);
var buffer1 = Buffer.from("Geeks");
for (let i = 0; i < 5; i++) {
  // Adds: 'a b c d e' as 97 98 99 100 101
  // are their respective ASCII values
  buffer2[i] = i + 97;
}

buffer2.copy(buffer1, 2);

// Prints 'Geabc' as the input buffer1
// carries 'Geeks' and we provided the
// targetStart index as 2
// so elements will replace the values in
// buffer1 starting from index 2

console.log(buffer1.toString());

// Creating a buffer
const buffer = Buffer.from("Geek One");
console.log(buffer.includes("Geek"));

const bufferz = Buffer.from("GeeksforGeeks: A computer science portal");
// Started checking the value from index 15 only
const output = bufferz.includes("Geek", 15);

console.log(output);

/////////
// Creating a buffer
var buffer1 = Buffer.from("Geek");
var buffer2 = Buffer.from("Geek");
var op = Buffer.compare(buffer1, buffer2);
console.log(op);

var buffer1 = Buffer.from("GFG");
var buffer2 = Buffer.from("Python");
var op = Buffer.compare(buffer1, buffer2);
console.log(op);

// Creating a buffer
var buffer1 = Buffer.from("2");
var buffer2 = Buffer.from("1");
var buffer3 = Buffer.from("3");
var array = [buffer1, buffer2, buffer3];

// Before sorting
console.log(array);
// After sorting array
console.log(array.sort(Buffer.compare));

var buffer1 = Buffer.from("GeeksOne");
var buffer2 = Buffer.from("GeekTwo");

// Print: -1 as size of buffer1 starting
// from index 4 is less than buffer2 size
var op = buffer1.compare(buffer2, 4);

// Print: 1 as the size of buffer2 starting
// from index 5 is less than size of buffer1
// starting from 0th index
var op1 = buffer1.compare(buffer2, 0, 7, 5);

console.log(op);
console.log(op1);

//The Buffer.alloc() method is used to create a new buffer object of the specified size.
//This method is slower than Buffer.allocUnsafe() method but it assures that the newly
// created Buffer instances will never contain old information or data that is potentially sensitive.

var buf = Buffer.alloc(6);

// Prints: <Buffer 00 00 00 00 00 00>
console.log(buf);

var buf = Buffer.alloc(6, "a");
// Prints <Buffer 61 61 61 61 61>
console.log(buf);
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii").includes("aaaa"));

/////////
var buf1 = Buffer.from("Hi");
var buf2 = Buffer.from("His");

// Prints true(boolean value)
console.log(buf1.equals(buf2));

///
// Allocating buffer
const bufa = Buffer.from("GeeksforGeeks", "ascii");

// Printing original buffer
console.log("Original buffer is: " + bufa);

// Cropping buffer, here starting index
// is 5 and ending index is 10
cropped_buf = bufa.subarray(5, 10);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);
console.log(cropped_buf);

// Modifying cropped buffer
cropped_buf[0] = 70; // F
cropped_buf[1] = 79; // O
cropped_buf[2] = 82; // R

// Printing cropped buffer
console.log("Cropped buffer after modification is: " + cropped_buf);

// Printing original buffer
console.log("Original buffer after modification is: " + bufa);

// Allocating buffer
const bufc = Buffer.from("GeeksforGeeks", "ascii");

// Printing original buffer
console.log("Original buffer is: " + bufc);

// Cropping buffer, here starting index
// is -10 and ending index is -1
cropped_buf = bufc.subarray(-12, -1);

// Printing cropped buffer
console.log("Cropped buffer is:" + cropped_buf);

// Cropping buffer again, here starting
// index is -10 and ending index is -5
cropped_buf = bufc.subarray(-10, -5);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

// Cropping buffer again with no parameter
cropped_buf = bufc.subarray();

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);
//

// buffer.readIntBE(offset, bytelen) method
const buffy = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]);

console.log(buffy.readIntBE(0, 5).toString(16));

console.log(buffy.readIntBE(0, 4).toString(16));

// Create a buffer
var buft = Buffer.from("GeeksforGeeks");
buft.write("EE", 1);
console.log(buft.toString());

// Create a buffer
const bufn = Buffer.allocUnsafe(100);
const len = bufn.write("GeeksforGeeks", 2, 5, "utf8");
console.log(len.toString());

// buffer.readIntLE( offset, byteLen ) method
const buffb = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]);
console.log(buffb.readIntLE(0, 5).toString(16));
console.log(buffb.readIntLE(0, 4).toString(16));

////////
// buffer.readUInt8() method
const obz = Buffer.from([1, 2, 3, 5]);
// It reads the first value
console.log(obz.readUInt8(0));
// It reads the second value
console.log(obz.readUInt8(1));
// It throws an error
console.log(obz.readUInt8(3));

////////
const bufferm = Buffer.from("GeeksforGeeks: A computer science portal");
const outputm = bufferm.indexOf("computer");
console.log(outputm);

/*
The Buffer.writeUInt32BE() method is used to write a number to an instance of the Buffer class. 
This value is written at the specified offset and in the big endian format.
*/
// Creating a buffer of size 8
const bufferl = Buffer.allocUnsafe(8);
console.log(bufferl);
// Return value is 4
bufferl.writeUInt32BE(0xabcdabcd, 0);
console.log(bufferl);
// Return value is 8
bufferl.writeUInt32BE(0xabcdabcd, 4);
console.log(bufferl);

console.log(bufferl.readInt32LE(0));
console.log(bufferl.readInt32LE(1));

console.log(Buffer.isEncoding("utf8"));
console.log(Buffer.isEncoding("utf16le"));
console.log(Buffer.isEncoding("ascii"));
console.log(Buffer.isEncoding("asciivalue"));
console.log(Buffer.isEncoding("base64"));
console.log(Buffer.isEncoding("basename"));

/**
 * The Buffer.swap32() method is an inbuilt application programming interface of
 * class Buffer within Buffer module which is used to swap the buffer byte order in-place.
 * The swapping is performed by interpreting buffer as an array of 32-bit numbers.
 */
const bufi = Buffer.from([0x7, 0x0, 0x1, 0x1, 0x4, 0x5, 0x4, 0x6]);
// Display the buffer value
// before swap
console.log(bufi);
// Using Buffer.swap32() method
bufi.swap32();
// Display the result
// after swap
console.log(bufi);

const bufk = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

// Display the buffer value
// before swap
console.log(bufk);

// Using Buffer.swap16() method
buf.swap16();

// Display the result
// after swap
console.log(bufk);

//
console.log(bufi.toString());
console.log(bufi.toString("ascii"));
console.log(bufi.toString("utf-8", 1, 6));
console.log(bufi.toString("hex"));
console.log("---");

// Creates an arrayBuffer with
// length 10
var arbuff = new ArrayBuffer(8);
arbuff[0] = "GeeksforGeeks";

// Returns a new buffer with a
// specified memory range within
// the arrayBuffer
var bufg = Buffer.from(arbuff, 0, 4);

// Displays the length
console.log(bufg.length);
console.log(bufg);

console.log("---");
console.log(Buffer.isBuffer(arbuff));
console.log(Buffer.isBuffer(bufg));

////////
var bufferlk = Buffer.alloc(13);
bufferlk.fill("GeeksforGeeks");
console.log(bufferlk.toString());

// Read in the iterator object
// and return the key number
// Buffer.keys() method
console.log("==");
for (index of bufferlk.keys()) {
  console.log(
    "index = " +
      index +
      ", val =  " +
      bufferlk[index] +
      "=" +
      String.fromCharCode(bufferlk[index])
  );
}

for (val of bufferlk.values()) {
  console.log("val =  " + val);
  console.log("val =  " + String.fromCharCode(val));
}
//entries
for (const pair of bufferlk.entries()) {
  console.log(pair);
}

// Create a JSON Object
var a = {
  name: "GeeksforGeeks",
};

// Convert to a string
a = JSON.stringify(a);

console.log("==json===");

// Creating a Buffer
const b = Buffer.from(a);
for (const pair of b.entries()) {
  console.log(pair[0] + " = " + String.fromCharCode(pair[1]));
}
for (const pair of b.entries()) {
  process.stdout.write(String.fromCharCode(pair[1]), "");
}

/**
 * The Buffer.poolSize property is an inbuilt application programming interface of class
 *  Buffer with in Buffer module that gives the size (in bytes)
 * of pre-allocated internal Buffer instances used for pooling. This value may be modified.
 */
console.log();
console.log(Buffer.poolSize);
// Assign the poolsize to the buffer
Buffer.poolSize = 1024;

// Display the buffer poolsize
console.log(Buffer.poolSize);

// Check the length of a buffer object:
var lenz = Buffer.byteLength("GeeksForGeeks");
console.log(lenz);

// Create a JSON Object
var a = {
  name: "GeeksforGeeks",
};

// Convert to a string
a = JSON.stringify(a);
console.log(a);



for (const pair of b.entries()) {
  process.stdout.write(String.fromCharCode(pair[1]), "");
}
console.log("==json2===");
/**
 * Buffer is a temporary memory storage which stores the data when it is being
 *  moved from one place to another. It is like the array of integers.

The Buffer.toJSON() method returns the buffer in JSON format.
 */
//The Buffer.toJSON() method returns the buffer in JSON format.
var bufferj = Buffer.from("GeeksforGeeks");

// Prints: the ascii values of each
// character of 'GeeksforGeeks'
console.log(bufferj.toJSON());

//stringfy
const buffero = Buffer.from([1, 2, 3, 4]);  
const outputo = JSON.stringify(buffero);  
// Prints: {"type":"Buffer", "data":[1, 2, 3, 4]}
console.log(outputo);

///
var bufferi = Buffer.from('GeeksForGeeks');  
console.log(bufferi.toString());
console.log(bufferi.lastIndexOf(101));
console.log(bufferi.lastIndexOf('e'));
// Prints : 10
// 101 is the ascii value of 'e'
// e occurs last at index 10
