//npm install https
//1. >npm install openssl  (not helps, better download and install on Windows, then set env-var)
//npm ls openssl
//openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
//To generate a private key, you’ll need OpenSSL
//2. > openssl genrsa 1024 > key.pem

/**
   * In addition to a private key, you’ll need a certificate. Unlike a private key, a certificate
can be shared with the world; it contains a public key and information about the certificate
holder.
   */
//The private key is used to create the certificate. Enter the following to generate a
//certificate called key-cert.pem
//3. openssl req -x509 -new -key key.pem > key-cert.pem

var https = require("https");
var fs = require("fs");
var options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("key-cert.pem"),
};
https
  .createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  })
  .listen(3000);
