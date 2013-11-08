
var util = require('util');

require('http').createServer(function (req, res) {
	res.writeHead({'content-type': 'text/plain'});
	res.end(util.inspect(req.headers));
}).listen(55555);

