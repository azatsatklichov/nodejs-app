//npm install axios@0.19.2
const axios = require('axios');

(async () => {
	try {
		const [resp] = await axios.all([
			axios.get('https://www.javascript.com/')
		]);
		console.log(resp.status);

		/*   console.log(response2.data.url);
		   console.log(response2.data.explanation);*/
	} catch (error) {
		console.log(error.response.body);
	}
})();