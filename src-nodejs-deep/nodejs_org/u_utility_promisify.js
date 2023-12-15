/**
 * util.promisify(func)
 * 
 * The util.promisify() method defines in utilities module of Node.js standard 
 * library. It is basically used to convert a method that returns responses using 
 * a callback function to return responses in a promise object.
 * 
Usually, very soon it becomes very difficult to work with callbacks due 
to callback nesting or callback hells. It becomes very difficult to 
organize or format our code so that other developers if working with 
that code, can understand it easily. In other side, it is very easy to 
deal with promises as nesting promises are also operate in linear style 
i.e. promise chaining. The util.promisify() method does this for 
us and makes the method to operate with promises. 
*/
// Importing Utilities module
const util = require("util");

// Importing File System module
const fs = require("fs");

// Use promisify to convert callback
// based method fs.readdir to
// promise based method
const readdir = util.promisify(fs.readdir);

readdir("process.cwd()")
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.log(err);
  });

//2
const readdir2 = util.promisify(fs.readdir);

const readFiles = async (path) => {
  const files = await readdir2(path);
  console.log(files);
};

readFiles(process.cwd()).catch((err) => {
  console.log(err);
});



//3
// Use promisify to convert 
// callback based methods to 
// promise based methods
const readdir3 = util.promisify(fs.readdir)
const lstat3 = util.promisify(fs.lstat)
  
  
const readFiles3 = async (path) => {
  const files = await readdir3(path)
  for (let file of files) {
    const stats = await lstat3(file)
    if (stats.isFile()) {
      console.log(`${file} -----> File`)
    } else {
      console.log(`${file} -----> Folder`)
    }
  }
}
  
readFiles3('process.cwd()').catch(err => {
  console.log(err)
})