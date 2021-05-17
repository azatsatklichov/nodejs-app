// using GOT 
const readline = require('readline');
const fs = require('fs');
//npm install axios@0.19.2
const axios = require('axios');

let myInterface = readline.createInterface({
	input: fs.createReadStream('./domains_list.txt')
});

const start = new Date()
let lineno = 0;
myInterface.on('line', function(line) {

	axios.get(line).then(resp => {

		console.log(resp.data);
	});
});




	(async () => {
		try {
			const resp = await axios.get(line);
			const val = line.trim()
			const result = 200 === resp.statusCode ? val + " access OK" : val + " access Failed"
			console.log(result);
			if (++lineno == 100) {
				printElapseTime(start);
			}
		} catch (error) {
			console.log(error.response.body);
		}
	})();


function printElapseTime(start) {
	var end = new Date() - start
	console.info('Elapsed time: %dms', end)
}


