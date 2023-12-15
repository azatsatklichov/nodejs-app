/**
 * The path.basename() method is used to get the filename portion of a path to the file. The trailing directory separators are ignored when using this method.
 */
// Import the path module
const path = require("path");
// Allocating process module
const process = require("process");

path1 = path.basename("/home/user/bash/index.txt");
console.log(path1);

// Using the extension parameter
path2 = path.basename("/home/user/bash/index.txt", ".txt");
console.log(path2);

///d
// Printing path.delimiter value
console.log(path.delimiter);

// Printing path.delimiter value
var delimiter = path.delimiter;

console.log(process.env.PATH);
let arr = process.env.PATH.split(path.delimiter);
console.log(arr);

arr.forEach((filePath) => {
  console.log(path.basename(filePath));
});

// Complete file path
path1 = path.dirname("/users/admin/website/index.html");
console.log(path1);

// Only file name
// returns a period (.)
path2 = path.dirname("readme.md");
console.log(path2);

// Path with file not specified
path3 = path.dirname("website/post/comments");
console.log(path3);

console.log("File name:", __filename);
path1 = path.dirname(__filename);

console.log("Directory name:", __dirname);
path2 = path.dirname(__dirname);
console.log(path2);

//
path1 = path.extname("hello.txt");
console.log(path1);

path2 = path.extname("readme.md");
console.log(path2);

// File with no extension
// Returns empty string
path3 = path.extname("fileDump");
console.log(path3);

// File with blank extension
// Return only the period
path4 = path.extname("example.");
console.log(path4);

path5 = path.extname("readme.md.txt");
console.log(path5);

// Extension name of the current script
path6 = path.extname(__filename);
console.log(path6);

paths_array = [
  "/home/user/website/index.html",
  "/home/user/website/style.css",
  "/home/user/website/bootstrap.css",
  "/home/user/website/main.js",
  "/home/user/website/contact_us.html",
  "/home/user/website/services.html",
];

paths_array.forEach((filePath) => {
  if (path.extname(filePath) == ".html") console.log(filePath);
});

/**
 * path.format( pathObject )
Parameters: This function accepts single parameter pathObject that contains the details of the path. It has the following parameters:

dir: It specifies the directory name of the path object.
root: It specifies the root of the path object.
base: It specifies the base of the path object.
name: It specifies the file name of the path object.
ext: It specifies the file extension of the path object.
 */

// CASE 1
// If "dir", "root" and "base" are all given,
// "root" is ignored.
let path1f = path.format({
  root: "/ignored/root/",
  dir: "/home/user/personal",
  base: "details.txt",
});
console.log("Path 1:", path1f);

// CASE 2
// If "dir" is not specified then "root" will be used
// If only "root" is provided
// platform separator will not be included.
// "ext" will be ignored.
let path2f = path.format({
  root: "/",
  base: "game.dat",
  ext: ".noextension",
});
console.log("Path 2:", path2f);

// CASE 3
// If "base" is not specified
// "name" and "ext" will be used
let path3f = path.format({
  root: "/images/",
  name: "image",
  ext: ".jpg",
});
console.log("Path 3:", path3f);

//on WINDOWs
// CASE 1
// If "dir", "root" and "base" are all given,
// "root" is ignored.
let path1w = path.format({
  root: "C:\\ignored\\root",
  dir: "website\\dist",
  base: "index.html",
});
console.log("Path 1:", path1w);

// CASE 2
// If "dir" is not specified then "root"
// will be used
// If only "root" is provided platform
// separator will not be included.
// "ext" will be ignored.
let path2w = path.format({
  root: "C:\\",
  base: "style.css",
  ext: ".ignored",
});
console.log("Path 2:", path2w);

// CASE 3
// If "base" is not specified
// "name" and "ext" will be used
let path3w = path.format({
  root: "website\\",
  name: "main",
  ext: ".js",
});
console.log("Path 3:", path3w);

// Joining 2 path-segments
path1 = path.join("users/admin/files", "index.html");
console.log(path1);

// Joining 3 path-segments
path2 = path.join("users", "geeks/website", "index.html");
console.log(path2);

// Joining with zero-length paths
path3 = path.join("users", "", "", "index.html");
console.log(path3);

// Normalizing of the final path
path1 = path.join("users", "..", "files", "readme.md");
console.log(path1);

// Zero length final path
// returns a period (.)
path2 = path.join("users", "..");
console.log(path2);

// Getting the directory path one folder above
console.log("Current Directory: ", __dirname);
path3 = path.join(__dirname, "..");
console.log("Directory above:", path3);

///normalize
// path.normalize() method

// Import the path module

path1 = path.normalize("/users/admin/.");
console.log(path1);

path2 = path.normalize("/users/admin/..");
console.log(path2);

path3 = path.normalize("/users/admin/../comments");
console.log(path3);

path4 = path.normalize("/users///admin///comments");
console.log(path4);

path4 = path.normalize("C:\\ignored\\rootcomments");
console.log(path4);

path4 = path.normalize("C:\\gnored\\rootcomments\\s");
console.log(path4);

/**
 * The path.parse() method is used to return an object whose properties represent the given path. This method returns the following properties:

root (root name)
dir (directory name)
base (filename with extension)
ext (only extension)
name (only filename)
 */
path1 = path.parse("/users/admin/website/index.html");
console.log(path1);

path2 = path.parse("website/readme.md");
console.log(path2);
console.log(path2.ext);

path1 = path.parse("C:\\users\\admin\\website\\index.html");
console.log(path1);

path2 = path.parse("website\\style.css");
console.log(path2);
console.log(path2.dir);
console.log(path2.base);
console.log(path2.name);
console.log(path2.root);

path3 = path.parse("C:\\gnored\\rootcomments\\s");
console.log(path3);
console.log(path3.dir);
console.log(path3.base);
console.log(path3.name);
console.log(path3.root);

//absolute path
path1 = path.isAbsolute("/user/bash/");
console.log(path1);

path2 = path.isAbsolute("user/bash/readme.md");
console.log(path2);

path3 = path.isAbsolute("/user/bash/readme.md");
console.log(path3);

path4 = path.isAbsolute("..");
console.log(path4);

/**
 * The path.relative() method is used to find the relative path from 
 * a given path to another path based on the current working directory. 
 * If both the given paths are the same, it would resolve to a zero-length 
 * string.
 
path.relative( from, to )
Parameters: This method accept two parameters as mentioned above and 
described below:

from: It is the file path that would be used as base path.
to: It is the file path that would be used to find the relative path.
*/
path1 = path.relative("geeks/website", "geeks/index.html");
console.log(path1);

path2 = path.relative("users/admin", "admin/files/website");
console.log(path2);

// When both the paths are same
// It returns blank string
path3 = path.relative("users/admin", "users/admin");
console.log(path3);

/**
 * path.resolve( [...paths] )
Parameters: This function accepts one parameter as mentioned above and described below: 

paths: It is a series of file paths that would be resolved together to form an absolute path. It throws a TypeError if this parameter is not a string value.
Return Value: It returns a string with absolute path.
 
 */
console.log("Current directory:", __dirname);

// Resolving 2 path-segments
// with the current directory
path1 = path.resolve("users/admin", "readme.md");
console.log(path1);

// Resolving 3 path-segments
// with the current directory
path2 = path.resolve("users", "admin", "readme.md");
console.log(path2);

// Treating of the first segment
// as root, ignoring the current directory
path3 = path.resolve("/users/admin", "readme.md");
console.log(path3);

console.log("Current directory:", __dirname);

// Normalization of the absolute paths
path1 = path.resolve("users", "..", "readme.md");
console.log(path1);

path2 = path.resolve("users", "admin", "..", "files", "readme.md");
console.log(path2);

path3 = path.resolve("users", "admin", "..", "files", "..", "readme.md");
console.log(path3);

 
let originalPath = "C:\\Windows\\users";
console.log("Original Path:", originalPath);
  
let nameSpacedPath = path.toNamespacedPath(originalPath);
console.log("Namespaced Path:", nameSpacedPath);

let originalPath2 = "C:\\Windows\\users\\..\\admin";
console.log("Original Path:", originalPath2);
  
let nameSpacedPath2 = path.toNamespacedPath(originalPath2);
console.log("Namespaced Path:", nameSpacedPath2);

/*
path.toNamespacedPath( path )
Parameters: This function accepts single parameter as mentioned above and described below:

path: It is an string which contains the path that has to be converted.
Return Value: It returns a string with an equivalent namespace-prefixed path.
*/

let originalPath = "C:\\Windows\\users";
console.log("Original Path:", originalPath);
  
let nameSpacedPath = path.toNamespacedPath(originalPath);
console.log("Namespaced Path:", nameSpacedPath);