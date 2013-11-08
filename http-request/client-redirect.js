
var request = require('request');
var inspect = require('util').inspect;

request(
	'http://localhost:55555/redirect', 
	function (error, response, body) {
		if (error) {throw error;};
		console.log(inspect({
			error: error,
			response: {
				statusCode: response.statusCode
			},
			body: JSON.parse(body)
		}));
	});

