const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);//big REQUEST obj. 
  console.dir(req, {depth: 0});
  console.log('----- res ----'); 
  console.dir(res, {depth: 0});     

  console.log(req.url); 
  res.end("Hello Nodemon  ds!\n");
});

server.listen(4242, () => {
  console.log("Server is dd running...");
});


//nmp 9-web.js
//> npm i -g nodemon
//nodemon 9-web.js //no restart needed after change
//http://localhost:4242/



//EXPRESS

// const express = require('express');

// const server = express();

// server.listen(4242, () => {
//   console.log('Express Server is running...');
// });
