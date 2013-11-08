
var http = require('http');

var options = {
	host: "www.google.com",
	port: 80,
	path: "/"
};

http.get(options, function (res) {
	console.log('Got response: ' + res.statusCode);
});
