/**
 * slow-client-problem.js
 * PNPracs
 *
 * Created by Vuong on 8/6/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var fs = require('fs');

require('http').createServer(function(req, res){

  var rs = fs.createReadStream('/path/to/file');

  rs.on('data', function(data){
    if (!res.write(data)){
      rs.pause();   // pause the readable stream if the write command can not flush it to the kernel.
    }
  });

  res.on('drain', function(){
    rs.resume();   // resume the readable stream when the writable stream is drained.
  });

  rs.on('end', function(){
    res.end();
  });

}).listen(8080);


// Use pipe

require('http').createServer(function(req, res){

  var rs = fs.createReadStream('/path/to/file');

  rs.pipe(res, {end : false});   // prevent end() is called on destination when readable stream ends.

}).listen(8080);

