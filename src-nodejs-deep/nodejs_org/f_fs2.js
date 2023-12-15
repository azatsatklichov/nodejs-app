let fs = require('fs');

  reader = fs.createReadStream('input.txt');
  
// Read and display the file data on console
reader.on('data', function (chunk) {
    console.log(chunk.toString());
});

reader = fs.createReadStream('input.txt', {
  flag: 'a+',
  encoding: 'UTF-8',
  start: 11,
  end: 64,
  highWaterMark: 16
});

// Read and display the file data on console
reader.on('data', function (chunk) {
  console.log(chunk);
});