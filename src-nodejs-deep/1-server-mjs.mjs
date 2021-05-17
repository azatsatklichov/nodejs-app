//for Ecmascript module mgm system  we do not use require, instead import
//at Module._compile (internal/modules/cjs/loader.js:760:23)
//import http from  'http';
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hallo from http web server - mjs");
});

server.listen(4242, () => {
  console.log("Server is running, ...");
});
