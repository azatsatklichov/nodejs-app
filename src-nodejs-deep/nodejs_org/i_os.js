// Allocating os module
const os = require("os");

// Printing os.arch() description
// of the architecture
switch (os.arch()) {
  case "x32":
    console.log("32-bit extended system");
    break;

  case "x64":
    console.log("64-bit extended system");
    break;

  case "arm":
    console.log("32-bit  Advanced RISC Machine");
    break;

  case "arm64":
    console.log("64-bit  Advanced RISC Machine");
    break;

  case "s390":
    console.log(
      "31-bit The IBM System/390, the" +
        " third generation of the System/360" +
        " instruction set architecture"
    );
    break;

  case "s390x":
    console.log(
      "64-bit The IBM System/390, the" +
        " third generation of the System/360" +
        " instruction set architecture"
    );
    break;

  case "mipsel":
    console.log(
      "64-bit Microprocessor without" + " Interlocked Pipelined Stages"
    );
    break;

  case "mips":
    console.log(
      "32-bit Microprocessor without" + " Interlocked Pipelined Stages"
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
    console.log(" unknown processor");
}

// Printing os.cpus() values
console.log(os.cpus());

// Printing os.freemem() value
console.log(os.freemem());

// Printing os.freemem() value
var free_memory = os.freemem();
var free_mem_in_kb = free_memory / 1024;
var free_mem_in_mb = free_mem_in_kb / 1024;
var free_mem_in_gb = free_mem_in_mb / 1024;

free_mem_in_kb = Math.floor(free_mem_in_kb);
free_mem_in_mb = Math.floor(free_mem_in_mb);
free_mem_in_gb = Math.floor(free_mem_in_gb);

free_mem_in_mb = free_mem_in_mb % 1024;
free_mem_in_kb = free_mem_in_kb % 1024;
free_memory = free_memory % 1024;

console.log(
  "Free memory: " +
    free_mem_in_gb +
    "GB " +
    free_mem_in_mb +
    "MB " +
    free_mem_in_kb +
    "KB and " +
    free_memory +
    "Bytes"
);

// Printing os.homedir() value
console.log(os.homedir());

console.log(getUserHome());

function getUserHome() {
  // Return the value using process.env
  return process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
}

try {
  // Printing priority of current process
  console.log(os.getPriority());
} catch (err) {
  console.log(i + ": error occured" + err);
}

if (os.hostname()) {
  var hostname = os.hostname();
  console.log("Hostname for the operating" + " system is " + String(hostname));
}

/**
 * os.loadavg()
Parameters: This method does not accept any parameters.

Return Value: This method returns an array containing fractional number of size three signifies 1, 5 and 15 minutes load average calculated by the operating system. On windows, it will return [0, 0, 0] as load average is Unix-Specific concept.
 */

// Printing os.loadavg() value
console.log(os.loadavg());

// Printing os.loadavg() value
var avg_load = os.loadavg();

console.log("Load average (1 minute):" + String(avg_load[0]));

console.log("Load average (5 minute):" + String(avg_load[1]));

console.log("Load average (15 minute):" + String(avg_load[2]));

// Printing os.userInfo() values
try {
  // Printing user information
  console.log(os.userInfo());
} catch (err) {
  // Printing if any exception occurs
  console.log(": error occurred" + err);
}

// Printing os.uptime() value
console.log(String(os.uptime()) + " Seconds");

// Printing os.uptime() value
var ut_sec = os.uptime();
var ut_min = ut_sec / 60;
var ut_hour = ut_min / 60;

ut_sec = Math.floor(ut_sec);
ut_min = Math.floor(ut_min);
ut_hour = Math.floor(ut_hour);

ut_hour = ut_hour % 60;
ut_min = ut_min % 60;
ut_sec = ut_sec % 60;

console.log(
  "Up time: " +
    ut_hour +
    " Hour(s) " +
    ut_min +
    " minute(s) and " +
    ut_sec +
    " second(s)"
);


console.log("home directory:" + getUserHome());
console.log("temp directory:" + os.tmpdir());
  
function getUserHome() {
      
    // From process.env
    return process.env[(process.platform == 'win32')
            ? 'USERPROFILE' : 'HOME'];
}

// Printing os.platform() value
console.log(os.platform());
console.log(process.platform);

// Printing os.platform() value
var platform = os.platform();
  
switch(platform) {
    case 'aix': console.log("IBM AIX platform");
        break;
    case 'android': console.log("Android platform");
        break;
    case 'darwin': console.log("Darwin platform(MacOS, IOS etc)");
        break;
    case 'freebsd': console.log("FreeBSD Platform");
        break;
    case 'linux': console.log("Linux Platform");
        break;
    case 'openbsd': console.log("OpenBSD platform");
        break;
    case 'sunos': console.log("SunOS platform");
        break;
    case 'win32': console.log("windows platform");
        break;    
    default: console.log("unknown platform");
}