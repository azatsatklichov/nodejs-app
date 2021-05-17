const http = require('http');

const server = http.createServer((req,res) => {
          res.end("Hallo from http web server");
});

server.listen(4242, () => {
          console.log('Server is running, ...');
});