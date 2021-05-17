//npm install node-fetch@2.6.0
const fetch = require('node-fetch');

(async () => {
	try {
		const response = await fetch('https://www.javascript.com/').then(response => response.json());
		/*console.log(json.url);
		console.log(json.explanation);*/
	} catch (error) {
		console.log(error.response.body);
	}
})();