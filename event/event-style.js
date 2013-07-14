/**
 * event-style.js
 * PNPracs
 *
 * Created by Vuong on 7/14/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var http = require('http');


var request = http.request('http://www.google.com', function(res){
  res.on('data', function(data){
    console.log('Data from the response: ', data.toString());
  });
  res.on('end', function(){
    console.log('Response ended.');
  });
});

request.end();
