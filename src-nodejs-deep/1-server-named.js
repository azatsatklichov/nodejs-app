const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end("Hallo from http web server - named imports");
});

server.listen(4242, () => {
  console.log("Server is running, ...");
});
