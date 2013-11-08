
var http = require('http');

var options = {
	host: "httpbin.org",
	// port: 8080,
	path: "/post",
	method: "POST"
};

var request = http.request(options, function (res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers, null, 2));
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('BODY: ', chunk);
	});
});

request.write('This is a piece of data\n');
request.write('This is another piece of data\n');

request.end();