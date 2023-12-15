//https://www.geeksforgeeks.org/node-js-crypto-complete-reference/
/**
 * Cryptography is an important aspect when we deal with network security. 
 * ‘Crypto’ means secret or hidden. Cryptography is the science of secret 
 * writing with the intention of keeping the data secret.

The cipher.final() method is an inbuilt application programming interface of class Cipher within crypto module 
which is used to return the buffer containing the value of cipher object.

const cipher.final([outputEncoding])
*/

// Importing crypto module
const crypto = require("crypto");

// Creating and initializing algorithm and password
const algorithm = "aes-192-cbc";
const password = "Password used to generate key";

// Getting key for the cipher object
const key = crypto.scryptSync(password, "salt", 24);

// Creating and initializing the static iv
const iv = Buffer.alloc(16, 0);

// Creating and initializing the cipher object
const cipher = crypto.createCipheriv(algorithm, key, iv);

// Getting buffer value
// by using final() method
let value = cipher.final("hex");

// Display the result
console.log("buffer :- " + value);
//console.log("buffer :- " + value.toString("ascii"));

//2-eg.
// Getting key for cipher object
crypto.scrypt(password, "salt", 24, { N: 512 }, (err, key) => {
  if (err) throw err;

  // Creating and initializing the static iv
  const iv = Buffer.alloc(16, 0);

  // Creating and initializing the cipher object
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // Getting buffer value
  // by using final() method
  let value = cipher.final("hex");

  // Display the result
  console.log("buffer :- " + value);
});


//const cipher.update(data[, inputEncoding][, outputEncoding])
//which is used to update the cipher with data according to the given encoding format.
// Getting key for the cipher object
const key2 = crypto.scryptSync(password, 'salt', 24);
 
// Creating and initializing the static iv
const iv2 = Buffer.alloc(16, 0);
 
// Creating and initializing the cipher object
const cipher2 = crypto.createCipheriv(algorithm, key2, iv2);
 
// Updating the cipher with the data
// by using update() method
let encrypted = cipher2.update(
    'some clear text data', 'utf8', 'hex');
 
// Getting the buffer data of cipher
encrypted += cipher2.final('hex');
 
// Display the result
console.log(encrypted);

///getCiphers
// Calling getCiphers method
const ciphers = crypto.getCiphers();
  
// Prints all the algorithms associated with ciphers
console.log("The list of algorithms are as follows: ", ciphers);



//New Cipher, I guess from Java 11 or 13 available
//Elliptic Curve Diffie-Hellman i.e, (ECDH) key exchange object with the help 
//of a predefined curve which is defined by the curveName string. Moreover you 
//can use crypto.getCurves() method in order to return the list of available curve names.

//const cipher = crypto.createCipheriv(algorithm, key, iv);
  
// Creating ECDH with curve name
const curv = crypto.createECDH('secp521r1');
  
// Prints keys
console.log(curv.generateKeys());
//or
// Creating ECDH with curve name
const curv2 = crypto.createECDH('secp521r1');
curv2.generateKeys();
  
// Prints Public key
console.log("Public Key: ", curv2.getPublicKey());
  
// Prints Private Key
console.log("Private Key :", curv2.getPrivateKey());


/**
 * The crypto.createDecipheriv() method is an inbuilt application programming 
 * interface of crypto module which is used to create a Decipher object, with the stated 
 * algorithm, key and initialization vector i.e, (iv)
 */

// Calling getCurves method
const curvev = crypto.getCurves();
  
// Prints all the supported elliptic curves
console.log("The list of all the elliptic curves are : ", curvev);

// Calling getHashes method
const hash = crypto.getHashes();
  
// Prints all the supported hash algorithms
console.log("The list of all the hash "
        + "algorithms are : ", hash);



///// crypto.createDiffieHellman() method
// Defining prime length
var prime_length = 60;
// Creating DiffieHellman keyexchange object
var diffHell = crypto.createDiffieHellman(prime_length);
// Displays keys which are encoded
console.log(diffHell.generateKeys('base64'));

//2
// Defining prime length and generator
var prime_length = 21;
var generator = 12;
  
// Creating DiffieHellman keyexchange
// object with all its parameter
var diffHell = crypto.createDiffieHellman(
               prime_length, generator);
  
// Displays keys which are encoded
console.log(diffHell.generateKeys('hex'));
  
// Displays public and private keys
console.log("Public Key : ",
      diffHell.getPublicKey('base64'));
console.log("Private Key : ",
      diffHell.getPrivateKey('base64'));