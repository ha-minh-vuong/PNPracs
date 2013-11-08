
var http = require('http');
var server = http.createServer();

server.on('request', function (req, res) {
	res.writeHead('content-type': 'text/plain');
	res.write('Hello world');
	res.end();
});
