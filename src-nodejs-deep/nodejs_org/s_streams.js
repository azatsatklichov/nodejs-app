//https://www.geeksforgeeks.org/node-js-stream-complete-reference/
const stream = require("stream");

// Creating a stream and creating
// a write function
const writable = new stream.Writable({
  // Write function with its
  // parameters
  write: function (chunk, encoding, next) {
    // Converting the chunk of
    // data to string
    console.log(chunk.toString());
    next();
  },
});

// Writing data
writable.write("hi");

// Calling cork() function
writable.cork();

// Again writing some data
writable.write("hello");
writable.write("world");
