/**
 * tcp.js
 * PNPracs
 *
 * Created by Vuong on 8/6/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var tcpServer = require('net').createServer();

var port = 5000;

tcpServer.on('listening', function(){
  console.log('Server is listening on: %s', port);
});

tcpServer.on('connection', function(socket){
  console.log('Server has a new connection', socket);
  socket.end();
  tcpServer.close();
});

tcpServer.on('close', function(){
  console.log('Server is now close.');
});

tcpServer.on('error', function(err){
  console.log('Error: ', err.message);
});

tcpServer.listen(port);
