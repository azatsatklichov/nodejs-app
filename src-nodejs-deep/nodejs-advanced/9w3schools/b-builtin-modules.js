//https://www.w3schools.com/nodejs/ref_modules.asp
//To include a module, use the require() function with the name of the module:
const myUtil = require('./my-lib/util');
console.log(myUtil);



var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6);
console.log(util.isArray(myUtil.id));

console.log(result);

//var url = require('url');

var zlib = require('zlib');
var fs = require('fs');

//archiving is so easy, even easier than Linux. In Java quite a lot Job
var gzip = zlib.createGzip();
var r = fs.createReadStream('./zlib-demo.txt');
var w = fs.createWriteStream('./mygzipfile.txt.gz');
r.pipe(gzip).pipe(w);

//almost like eval() in JavaScript
var vm = require('vm');
var myObj = { name: 'John', age: 43 };
vm.createContext(myObj);
//xecutes JavaScript code in the specified context, and returns the result
vm.runInContext('age += 1;', myObj);

console.log(myObj);


//The TLS module provides a way of implementing TLS (Transport Layer Security) and SSL (Secure Socket Layer).
var tls = require('tls');
console.log('Ciphers: ' + tls.getCiphers);
console.log(tls.getCiphers());
console.log('Ciphers: ' + tls.getCiphers());

//timers
var myInt = setInterval(function () {
        console.log("Hello");
}, 500);
//myInt.refresh;
clearInterval(myInt);


//The String Decoder module provides a way of decoding Buffer objects into strings.
var sd = require('string_decoder').StringDecoder;
var d = new sd('utf8');
var b = Buffer('abc');

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer

//The Stream module provides a way of handling streaming data. see a-intro.js
var stream = require('stream');





//Node.js Query String Module
var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year);


//path module
var path = require('path');
var filename = path.basename('C:\ws-vscode\.c4z');
console.log(filename);
console.log(filename); 
console.log(path.join(filename, "alfonso", "gulse"));


//OS module
var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Architecture: " + os.tmpdir());
console.log("Architecture: " + os.uptime());
console.log("Architecture: " + os.userInfo());
console.log("Architecture: " + os.freemem());
console.log("Architecture: " + os.EOL);


console.log("\n\n");
//Node.js Readline Module - The Readline module provides a way of reading a datastream, one line at a time.
var readline = require('readline');
//var fs = require('fs');

var myInterface = readline.createInterface({
        input: fs.createReadStream('zlib-demo.txt')
});

var lineno = 0;
myInterface.on('line', function (line) {
        lineno++;
        if (line !== 'fsd') {
                console.log('Line number ' + lineno + ': ' + line);
        }
});