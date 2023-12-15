/**
 * Parameters: This function accepts an object/list of parameters as mentioned above and described below:

options <Object>: It may have the following elements in the options object.

stdout <stream.Writable>: It accepts the write stream which is imported from fs module.
stderr <stream.Writable>: It also accepts the write stream which is imported from fs module.
ignoreErrors <boolean>: The default value passed is true. It ignores the errors while writing to the underlying streams.
colorMode <boolean> | <string>: The default value passed is ‘auto‘. It is used to set color which supports this Console instance only. It could be set true, false, or ‘auto’ according to set color mode.
inspectOptions <Object>: It specifies the options that are passed along to util.inspect() method.
groupIndentation <number>: The default value set is 2. It is used to set group indentation.
Return Value: Its output is sent to process.stdout and process.stderr files which are created by fs module through <stream.Writable>.

The Below examples illustrate the use of new Console(options) method in Node.js.
 */
const fs = require("fs");

// Using require to access console module
const { Console } = require("console");

// Creating write Stream
const output = fs.createWriteStream("./out.log");
const errorOutput = fs.createWriteStream("./err.log");

//
const options = {
  stdout: output,
  stderr: errorOutput,
  ignoreErrors: true,
  colorMode: false,
};
const logger = new Console(options);

const count = 5;

// Using like console
logger.log("count: %d", count);
logger.error("count: %d", count + 5 / 0);
console.log("Successfully created and logged via console...");

/////////// 2-eg
try {
  // Creating write Stream
  const output = fs.createWriteStream("./outputlog.txt");
  const error = fs.createWriteStream("./errlog.txt");

  // Creating new Console
  const objLogger = new Console({
    stdout: output,
    stderr: error,
    ignoreErrors: true,
    colorMode: true,
  });

  // Custom write Stream
  const outt = fs.createWriteStream("./output.log");
  const err = fs.createWriteStream("./error.log");

  // Another way to create console
  // (default values are passed to options)
  const logObject = new console.Console(outt, err);

  // Creating family object
  var family = {};
  family.Head = "Miss Sanno";
  family.headDesignation = "Teacher";
  family.Member1 = "Miss Sanchi";
  family.member1Designation = "Kid";
  family.Member2 = "Master Amit";
  family.member2Designation = "Student";

  // Creating constant value count
  const count = 25 + 75 * 5 - 5 / 2;
  // Writing via console
  objLogger.log("Family: %s", family);
  // Printing Family Object to console
  console.log("Family Stream Created: ", family);
  // Writing via console
  logObject.log("Count: %s", count);
  // Printing count to console
  console.log("Count Stream Created: ", count);
  // console.log(logObject.family.error)
} catch {
  console.error(new Error("Oops, some error happened in family..."));
  // Prints: [Error: Oops, some error
  // happened in family...], to stderr
}



