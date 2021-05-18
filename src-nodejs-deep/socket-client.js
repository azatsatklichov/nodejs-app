var net = require("net");
var socket = net.connect({ port: 1337, host: "localhost" });
socket.on("connect", function () {
  // begin writing your "request"
  socket.write("HELO local.domain.name\r\n");
  //...
});
