// Including crypto and fs module
const crypto = require("crypto");
const fs = require("fs");

// Using a function generateKeyFiles
function generateKeyFiles() {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 530,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "",
    },
  });

  // Creating public and private key file
  fs.writeFileSync("public_key", keyPair.publicKey);
  fs.writeFileSync("private_key", keyPair.privateKey);
}

// Generate keys
generateKeyFiles();

// Creating a function to encrypt string
function encryptString(plaintext, publicKeyFile) {
  const publicKey = fs.readFileSync(publicKeyFile, "utf8");

  // publicEncrypt() method with its parameters
  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(plaintext));

  return encrypted.toString("base64");
}

// Creating a function to decrypt string
function decryptString(ciphertext, privateKeyFile) {
  const privateKey = fs.readFileSync(privateKeyFile, "utf8");

  // privateDecrypt() method with its parameters
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey,
      passphrase: "",
    },
    Buffer.from(ciphertext, "base64")
  );

  return decrypted.toString("utf8");
}

// Defining a text to be encrypted
const plainText = "Geeks!";

// Defining encrypted text
const encrypted = encryptString(plainText, "./public_key");

// Prints plain text
console.log("Plaintext:", plainText);
console.log();

// Prints buffer of encrypted content
console.log("Encrypted Text: ", encrypted);
console.log();

// Prints buffer of decrypted content
console.log("Decrypted Text: ", decryptString(encrypted, "private_key"));


////Node.js crypto.randomFillSync() Method
//is an inbuilt application programming interface of crypto module which is used to return the object passed as buffer argument.

// Defining buffer
const buffer = Buffer.alloc(15);  
// Calling randomFillSync method with only 
// one parameter, buffer
console.log(crypto.randomFillSync(buffer).toString('ascii'));  
// Calling randomFillSync method with 
// two parameters, buffer and offset
crypto.randomFillSync(buffer, 4);
console.log(buffer.toString('base64'));
  
// Calling randomFillSync method with three 
// parameters, buffer, offset and size
crypto.randomFillSync(buffer, 4, 4);
console.log(buffer.toString('base64'));