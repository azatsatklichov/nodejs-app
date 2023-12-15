/**
 * 
 * fs.open( filename, flags, mode, callback )
Parameter: This method accept four parameters as mentioned above and described below: 
 

filename: It holds the name of the file to read or the entire path if stored at other location.
flag: The operation in which file has to be opened.
mode: Sets the mode of file i.e. r-read, w-write, r+ -readwrite. It sets to default as readwrite.
callback: It is a callback function that is called after reading a file. It takes two parameters: 
err: If any error occurs.
data: A file descriptor, used by subsequent file operations. A file descriptor is a handle used to access a file. It is a non-negative integer uniquely referencing a specific file.
All the types of flags are described below: 
 

Flag	Description
r	To open file to read and throws exception if file doesn’t exists.
r+	Open file to read and write. Throws exception if file doesn’t exists.
rs+	Open file in synchronous mode to read and write.
w	Open file for writing. File is created if it doesn’t exists.
wx	It is same as ‘w’ but fails if path exists.
w+	Open file to read and write. File is created if it doesn’t exists.
wx+	It is same as ‘w+’ but fails if path exists.
a	Open file to append. File is created if it doesn’t exists.
ax	It is same as ‘a’ but fails if path exists.
a+	Open file for reading and appending. File is created if it doesn’t exists.
ax+	It is same as ‘a+’ but fails if path exists.
 */
var fs = require('fs');
 
// Open file demo.txt in read mode
fs.open('demo.txt', 'r', function (err, f) { //r+
  if(err){
    console.error(err);
  }
  console.log('Saved!');
});

fs.open('demo2.txt', 'w+', function (err, f) {//wx+
  if(err){
    console.log(err);
  }
  console.log('Saved!');

});

console.log("Contents of file before truncate:")
console.log(fs.readFileSync('example_file.txt', 'utf8'));
  
// Get the file descriptor of the file
const fd = fs.openSync('example_file.txt', 'r+');
  
fs.ftruncate(fd, 24, (err) => {
  if (err)
    console.log(err)
  else {
    console.log("Contents of file after truncate:")
    console.log(fs.readFileSync('example_file.txt', 'utf8'));
  }
});