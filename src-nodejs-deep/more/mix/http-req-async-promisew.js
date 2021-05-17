const request = require('request');

async function getRequest() {
  const options = {
    url: 'http://example.com',
    headers: {
      'Authorization': 'Bearer xxx'
    }
  };

  return new Promise((resolve, reject) => {
    return request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const json = JSON.parse(body);
        return resolve(json);
      } else {
        return reject(error);
      }
    });
  })
}