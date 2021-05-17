// Asynchronous Form:
//npm install p-time
const readline = require('readline');
const http = require('http');
const fs = require('fs');

let myInterface = readline.createInterface({
	input: fs.createReadStream('files/domains_list.txt')
});

const start = new Date()
let lineno = 0;
myInterface.on('line', function(line) {
	(async function read() {
		const statusCode = await fetch(line);
		const val = line.trim();
		const result = 200 == statusCode ? val + " access OK" : val + " access Failed"
		console.log(result + " " + lineno);
		if (++lineno == 100) {
			printElapseTime(start);
		}

	})();
});


function fetch(url) {
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let data = '';
			res.on('data', (rd) => data = data + rd);
			res.on('end', () => resolve(res.statusCode));
			res.on('error', reject);
		});
	});
}




function printElapseTime(start) {
	var end = new Date() - start
	console.info('Elapsed time: %dms', end)
}


