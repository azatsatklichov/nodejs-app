const fs = require('fs');
const http = require('http');
const { pipeline } = require('stream');

/*
Streaming a Large File to an HTTP Response
Using the pipeline() utility is the modern best practice. It connects your source to the destination and automatically handles errors and resource cleanup.
 * 
 */

http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./huge-movie.mp4');

  // Set appropriate headers for the client
  res.setHeader('Content-Type', 'video/mp4');

  // 'pipeline' manages the entire lifecycle
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      if (!res.headersSent) res.statusCode = 500;
      res.end();
    } else {
      console.log('Pipeline succeeded.');
    }
  });
}).listen(3000);