/**
 * A process object is a global object that gives information about
 * and control over the node.js process.
 */
// Include process module
const process = require("process");
const path = require("path");

// Printing process.arch property value
console.log(process.arch);
// Printing process.arch property value
switch (process.arch) {
  case "x32":
    console.log("32-bit extended systems");
    break;
  case "x64":
    console.log("64-bit extended systems");
    break;
  case "arm":
    console.log("32-bit  Advanced RISC Machine");
    break;
  case "arm64":
    console.log("64-bit  Advanced RISC Machine");
    break;
  case "s390":
    console.log(
      "31-bit The IBM System/390, the " +
        "third generation of the System/360" +
        " instruction set architecture"
    );
    break;
  case "s390x":
    console.log(
      "64-bit The IBM System/390, the " +
        "third generation of the System/360" +
        " instruction set architecture"
    );
    break;
  case "mipsel":
    console.log(
      "64-bit Microprocessor without " + "Interlocked Pipelined Stages"
    );
    break;
  case "mips":
    console.log(
      "32-bit Microprocessor without " + "Interlocked Pipelined Stages"
    );
    break;
  case "ia32":
    console.log("32-bit Intel Architecture");
    break;
  case "ppc":
    console.log("PowerPC Architecture.");
    break;
  case "ppc64":
    console.log("64-bit PowerPC Architecture.");
    break;
  default:
    colsole.log(" unknown architecture");
}

// Printing process.argv property value
/**
 * The process.argv property is an inbuilt application programming interface of the process module which is used to get the arguments passed to the node.js process when run in the command line.

Syntax:

process.argv
Return Value: This property returns an array containing the arguments 
passed to the process when run it in the command line. The first element 
is the process execution path and the second 
element is the path for the js file.
 */
console.log(process.argv);

//>node j_proc.js extra_argument1 extra_argument2 3

var args = process.argv;

console.log("number of arguments is " + args.length);

args.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// Printing process.argv0 property value
console.log(process.argv0);

// Printing process.config property value
console.log(process.config);

// Printing process.config property value
var no_conf = 0;
var conf = process.config;
for (var key in conf) {
  console.log(key);
  var sub_conf = conf[key];

  for (var attr in sub_conf) {
    console.log("\t" + attr + "=>" + sub_conf[attr]);
    no_conf++;
  }
}

console.log("total no of configuration available is " + no_conf);

try {
  // Change the directory
  process.chdir("../more");
  console.log("directory has successfully been changed");
  console.log(process.cwd());
  console.log(__dirname);
} catch (err) {
  // Printing error if occurs
  console.error("error while changing directory");
}

// Printing current directory
console.log("Current working directory: ", process.cwd());
// Printing process.debugPort
console.log("debug port is " + process.debugPort);
var debug_port = process.debugPort;

// Check whether debug port is defined
if (debug_port != undefined) {
  console.log("debug port is defined");
  console.log("debug port is " + debug_port);
} else {
  console.log("debug port is not defined");
}

// Printing process.env property value
console.log(process.env);
var env = process.env;
let no_env = 0;
// Iterating through all returned data
for (var key in env) {
  // Print value
  console.log(key + ":\t\t\t" + env[key]);
  no_env++;
}

// Printing count
console.log("total no of values available = " + no_env);

// Accessing one by one
console.log("operating system: " + env["OS"]);
console.log("alluserprofile: " + env["ALLUSERSPROFILE"]);
console.log("public directory: " + env["PUBLIC"]);

//node specific command line options
// Printing process.execArgv property value
console.log("---");
//>node -i --harmony  j_proc.js
console.log(process.execArgv);

var execargv = process.execArgv;
console.log("number of execution arguments is " + execargv.length);

execargv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// Printing process.execPath
var execpath = process.execPath;
console.log(execpath);

// Separated directories and file
console.log(execpath.split(path.sep));

// Printing the numerical user
// identity of the Node.js process
console.log(process.getuid);
if (process.getuid) {
  // Printing getuid() value
  console.log(
    "The numerical user identity " +
      "of the Node.js process: " +
      process.getuid()
  );
}

// Printing process.mainModule property value
console.log(process.mainModule);

var mainModule = process.mainModule;
for (mod in mainModule) {
  console.log(mod + ":" + mainModule[mod]);
}

// Printing process.pid property value
console.log("process id is " + process.pid);

// Printing process.platform property value
console.log(process.platform);
// Printing process.pid value
console.log("process id is " + process.pid);

// Printing parent process.ppid
console.log("parent process id is " + process.ppid);

// Printing process.title property value
console.log(
  "Before modification: PID: " +
    process.pid +
    " process title is " +
    process.title
);

// Setting new process title value
process.title = "gekchosCustomProcess";

// Printing process.title value after modification
console.log(
  "After modification: PID: " +
    process.pid +
    " process title is " +
    process.title
);

// Checking whether the method
// exists or not
if (process.uptime) {
  // Printing uptime() value
  console.log(
    "The number of seconds the" +
      " Node.js process is running: " +
      process.uptime() +
      " seconds"
  );

  var i = 1000000;

  while (i--);

  console.log(
    "The number of seconds the" +
      " Node.js process is running: " +
      process.uptime() +
      " seconds"
  );

  console.log("In whole seconds: " + Math.floor(process.uptime()) + " seconds");
}

// Printing process.version
const ver = process.version;
console.log("node.js version " + ver);

// Printing version name
var name = "";

if (ver.startsWith("v10.")) {
  name = "Dubnium";
} else if (ver.startsWith("v8.")) {
  name = "Caron";
} else if (ver.startsWith("v6.")) {
  name = "Boron";
} else if (ver.startsWith("v4.")) {
  name = "Argon";
} else {
  name = "unknown";
}
console.log("Node.js version name: " + name);

// Printing process.versions property value
console.log(process.versions);
