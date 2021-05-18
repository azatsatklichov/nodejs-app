const fs = require("fs");

var stream = fs.createReadStream("users.json");
stream.on("data", function (chunk) {
  console.log(chunk);
});
stream.on("end", function () {
  console.log("finished");
});

/**
 * var readStream = fs.createReadStream('./original.txt')
var writeStream = fs.createWriteStream('./copy.txt')


 * Node also provides writable streams that you can write chunks of data to. One of
those is the response (res) object when a request happens on an HTTP server.

Readable and writable streams can be connected to make pipes, much like you can
do with the | (pipe) operator in shell scripting. This provides an efficient way to write
out data as soon as it’s ready, without waiting for the complete resource to be read and
then written out.
 */

// var http = require("http");
// var server = http.createServer();
// server.on("request", function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World\n");
// });
// server.listen(3000);
// console.log("Server running at http://localhost:3000/");

//Let’s use our previous HTTP server to illustrate streaming an image to a client:
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    console.log("data is being .. ");
    fs.createReadStream("cbl-db2-sql.jpg").pipe(res);
    console.log("streamed");
  })
  .listen(3000);
console.log("Server running at http://localhost:3000/");
