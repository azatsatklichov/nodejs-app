const http = require('http');

const server = http.createServer((req,res) => {
          res.end("Hallo fromsd sd dsds http web server");
});

server.listen(4242, () => {
          console.log('Server sfdds df is sdd  dds running on port 4242, ...');
});