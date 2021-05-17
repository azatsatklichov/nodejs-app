// synchronous Form:
const https = require('https');
const http = require('http');
const fs = require('fs');
const url = require('url');

const arr = fs.readFileSync('./domains_list.txt').toString().split("\n")
	.filter(e => e.trim().length > 0);

arr.forEach(v => {
	const protocol = url.parse(v).protocol;	
	console.log(protocol === 'https');
	if (protocol === 'https') {
		https.get(v, (resp) => {
			console.log('statusCode:', resp.statusCode);
		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});
	} else {
		http.get(v, (resp) => {
			console.log('statusCode:', resp.statusCode);
		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});
	}
});

/*

// including exception handling
return httpClient.sendAsync(httpRequest, HttpResponse.BodyHandlers.discarding())
   .thenApply(
	   asynResult -> 200 == asynResult.statusCode() ? link + " access OK  " : link + " access Failed")
   .exceptionally(e -> "Error occured once accessing to " + link + ", reson is: " + e.getMessage());*/