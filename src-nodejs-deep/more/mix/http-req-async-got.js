const got = require('got');
//npm install got@10.6.0
(async () => {
	try {
		//const response = await got('https://www.javascript.com/', { json: true });
		const response = await got('https://www.javascript.com/');
		console.log(response.body.length);
		/*console.log(response.body.url);
		console.log(response.body.explanation);*/
	} catch (error) {
		console.log(error.response.body);
	}
})();