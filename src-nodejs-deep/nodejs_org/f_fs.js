/**
 * https://www.geeksforgeeks.org/node-js-file-system/
 * 
 * 
 *  The two features that make Node.js stand-out are:

Event-driven
Non-blocking I/O model

About Node.js file system: To handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called FS (File System). Node.js gives the functionality of file I/O by providing wrappers around the standard POSIX functions. All file system operations can have synchronous and asynchronous forms depending upon user requirements. 

Common use for File System module:

Read Files
Write Files
Append Files
Close Files
Delete Files

Synchronous approach: They are called blocking functions as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution i.e. a command will not be executed until & unless the query has finished executing to get all the result from previous commands.
Asynchronous approach: They are called non-blocking functions as it never waits for each operation to complete, rather it executes all operations in the first go itself. The result of each operation will be handled once the result is available i.e. each command will be executed soon after the execution of the previous command. While the previous command runs in the background and loads the result once it is finished processing the data.
Use cases:
If your operations are not doing very heavy lifting like querying huge data from DB then go ahead with Synchronous way otherwise Asynchronous way.
In an Asynchronous way, you can show some progress indicator to the user while in the background you can continue with your heavyweight works. This is an ideal scenario for GUI based apps.


 * Node.js File System module is used to handle file operations like creating, reading, deleting, etc. Node.js provides an inbuilt module called FS (File System). Node.js gives the functionality of file I/O by providing wrappers around the standard POSIX functions. All file system operations can have synchronous and asynchronous forms depending upon user requirements.

The Complete NodeJS File System are listed below:
 */

var fs = require("fs");
const path = require("path"); 
const os = require('os');    
const { sep } = require('path');

// Asynchronous read
fs.readFile("read.txt", function (err, data) {
  if (data) {
    console.log("Asynchronous read: " + data.toString());
  }
});

fs.readFile("input.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

//Open a File:
/**
 * Open a File: The fs.open() method is used to create, read, or write a file. 
 * The fs.readFile() method is only for reading the file and fs.writeFile() 
 * method is only for writing to the file, whereas fs.open() method does several 
 * operations on a file. First, we need to 
 * load the fs class which is a module to access the physical file system. Syntax:
 * 
 * fs.open(path, flags, mode, callback)
Parameters:

path: It holds the name of the file to read or the entire path if stored at other locations.
flags: Flags indicate the behavior of the file to be opened. All possible values
are ( r, r+, rs, rs+, w, wx, w+, wx+, a, ax, a+, ax+).
mode: Sets the mode of file i.e. r-read, w-write, r+ -readwrite. It sets to default as readwrite.
 
 
err: If any error occurs.
data: Contents of the file. It is called after the open operation is executed.
 */

//fs.open(path, flags, mode, callback)
// Asynchronous - Opening File
console.log("opening file!");
fs.open("read.txt", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("fs.ope");
  console.log("File open successfully");
});

/**
 * Reading a File: The fs.read() method is used to read the file specified by fd. This method reads the entire file into the buffer. Syntax:

fs.read(fd, buffer, offset, length, position, callback)
 */
console.log("--- opening an existing file");
fs.open("read.txt", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("+++ File opened successfully!");
  console.log("+++ reading the file");

  var buf = Buffer.alloc(1000);

  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      console.log(err);
    }
    console.log(bytes + " bytes read");

    // Print only read bytes to avoid junk.
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});

//fs.writeFile(path, data, options, callback)

fs.writeFile("input.txt", "Geeks For Geeks", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("=== Data written successfully!");
  console.log("--- Let's read newly written data");

  fs.readFile("input.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});

//Appending to a File: The fs.appendFile() method is used to synchronously
//append the data to the file. Syntax:
/**
 * fs.appendFile(filepath, data, options, callback);
or

fs.appendFileSync(filepath, data, options);
 */
var data = "\nLearn Node.js";

// Append data to file
fs.appendFile(
  "input2.txt",
  data,
  "utf8",

  // Callback function
  function (err) {
    if (err) throw err;

    //  If no error
    console.log("Data is appended async-way to file successfully.");
  }
);

data = "For synchronously appending";

// For synchronously appending
// Append data to file

//// Using fs.exists() method
fs.exists("input2.txt", (exists) => {
  console.log(exists ? "Found" : "Not found!");
  if (exists) {
    fs.appendFileSync("input2.txt", data + ", exists = " + exists, "utf8");
    console.log("Data is appended to file successfully. exists = " + exists);
  }
});

//existsync
let fileExists = fs.existsSync("hello.txt");
console.log("hello.txt exists:", fileExists);

function getCurrentFilenames() {
  console.log("\nCurrent filenames:");
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
  console.log("\n");
}

getCurrentFilenames();

/**
 * Closing the File: The fs.close() method is used to asynchronously 
 * close the given file descriptor thereby clearing the file that is associated with it. 
 * This will allow the file descriptor to be reused for other files. 
 * Calling fs.close() on a file descriptor while some other operation is being 
 * performed on it may lead to undefined behavior. Syntax:

fs.close(fd, callback)
 */

// Close the opened file.
// fs.close(1, function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File closed successfully.");
// });

//fs.mkdir(path, mode, callback)

fs.mkdir(path.join(__dirname, "dir"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});

// Completely delete the content
// of the targeted file
/**
 * fs.truncate( path, len, callback )
Parameters: This method accept three parameters as mentioned above and described below:

path: It holds the path of targeted file. It can be either string, buffer or a url.
len: It holds the length of the file after which the file will be truncated. It takes an integer input and it is not the mandatory condition as it is default set to 0.
callback: The callback receives one argument, any exception throws in the call.
 * 
 */
fs.truncate(path.join(__dirname, "dir", "input2.txt"), 1024, function () {
  console.log("File Content Deleted");
});

/**
 * The fs.renameSync() method is used to synchronously rename a file at the given old path to the given new path. It will overwrite the destination file if it already exists.

Syntax:

fs.renameSync( oldPath, newPath )
Property Values:

oldPath: It holds the path of the file that has to be renamed. It can be a string, buffer or URL.
newPath: It holds the new path that the file has to be renamed to. It can be a string, buffer or URL.
Below examples illustrate the fs.renameSync() method in Node.js: 
 */

// List all the filenames after renaming
// Rename the file
fs.renameSync("readit.txt", "readits.txt");
//fs.renameSync('nonexist.txt', 'world.txt');
// List all the filenames after renaming

fs.rmdir(
  "s",
  {
    recursive: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Recursive: Directories Deleted!");

      // Get the current filenames
      // in the directory to verify
      getCurrentFilenames();
    }
  }
);



// Getting information for a file
fs.stat("input.txt", (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Stats object for: example_file.txt");
    console.log(stats);

    // Using methods of the Stats object
    console.log("Path is file:", stats.isFile());
    console.log("Path is directory:", stats.isDirectory());
  }
});

// Getting information for a directory
fs.stat("input2.txt", (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Stats object for: example_directory.txt");
    console.log(stats);

    // Using methods of the Stats object
    console.log("Path is file:", stats.isFile());
    console.log("Path is directory:", stats.isDirectory());
  }
});


// Return temp   created folder
/**
 *  The fs.mkdtempSync() method creates a unique temporary directory.
 *  This is the synchronous version of fs.mkdtemp() method.
 */
console.log(fs.mkdtempSync(
  path.join(os.tmpdir(), 'foo-'))); 

  const tmpDir = os.tmpdir();
  console.log("temp-dir created under: "+fs.mkdtempSync(`${tmpDir}${sep}`));
