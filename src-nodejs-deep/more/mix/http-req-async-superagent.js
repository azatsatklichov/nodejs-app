//npm install superagent@5.2.2
const superagent = require('superagent');

(async () => {
	try {

		//Just like with Axios you don’t have to parse the JSON response yourself, which is pretty cool.


		const resp = await superagent.post('https://www.javascript.com/');
		console.log(resp);

	} catch (error) {
		console.log(error);
	}
})();