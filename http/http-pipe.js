
var fs = require('fs');

require('http').createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	var readStream = fs.createReadStream('http.js');
	readStream.pipe(res);
}).listen(55555);
