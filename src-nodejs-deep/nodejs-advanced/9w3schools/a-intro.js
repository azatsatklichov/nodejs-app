/* to include module, like a PROC in COBOL */
var http = require('http');
var url = require('url'); 
http.createServer(function (req, res) {
         
  var q = url.parse(req.url, true);
  console.log(q.href);
          //console.log(req);


          //Node.js Query String Module
var querystring = require('querystring');
var q2 = querystring.parse('year=2017&month=february');
console.log(q2.year);



  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(q.href); 


  res.end('Hello World - salam Dunya!!'); 


  console.log('This example is different!');
  console.log('The result is displayed in the Command Line Interface');

   //console.log(res);

//var stream = require('stream');
//

  
}).listen(9090);
