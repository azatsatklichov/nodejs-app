// Node.js program to demonstrate the
// fsPromises.mkdtemp() method
const fs = require("fs");

const fsPromises = fs.promises;
const prefix = "temp";

fsPromises
  .mkdtemp(prefix, { encoding: "utf8" })
  .then((folder) => {
    console.log("Temp folder created ", folder);
  })
  .catch((err) => {
    console.log(err);
  });

// Get the file contents before the append operation
console.log(
  "\nFile Contents of file before append:",
  fs.readFileSync("input.txt", "utf8")
);

fsPromises
  .appendFile("input.txt", "GeeksforGeeks")
  .then(function () {
    console.log(
      "\nFile Contents of file after append:",
      fs.readFileSync("input.txt", "utf8")
    );
  })
  .catch(function (err) {
    console.log(err);
  });


  ///copy
fsPromises
  .copyFile("input2.txt", "copied.txt")
  .then(function () {
    console.log("File Copied");
  })
  .catch(function (error) {
    console.log(error);
  });



  //file handler
