/**
 * plus-one-test.js
 * PNPracs
 *
 * Created by Vuong on 8/3/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var spawn = require('child_process').spawn;

// Spawn the child with a node process executing the plus_one app.
var child = spawn('node', ['plus-one.js']);

// Call this function every one sec.
setInterval(function(){
  // Create a random number < 10000.
  var number = Math.floor(Math.random() * 10000);
  // Send that number to child process.
  child.stdin.write(number + '\n');
  // Get the response of child process and print it.
  child.stdout.once('data', function(data){
    console.log('child reply to ' + number + ' with data: ' + data);
  });
}, 1000);

child.stderr.on('data', function(data){
  process.stdout.write(data);
});