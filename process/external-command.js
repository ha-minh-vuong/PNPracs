/**
 * external-command.js
 * PNPracs
 *
 * Created by Vuong on 7/30/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var exec = require('child_process').exec;

// Launch the command 'cat *.js | wc -l
exec('cat *.js | wc -l', function(err, stdout, stderr){
  if (err){
    console.log('Error: %s', err);
    return;
  }
  console.log(stdout);
});


// Spawn child process

// Launch a child process with a "tail -f /var/log/system.log" command.
var spawn = require('child_process').spawn;
var child = spawn('tail', ['-f', '/var/log/system.log']);

// Listen for data from child process.
child.stdout.on('data', function(data){
  console.log('tail output: ' + data);
});

child.stderr.on('data', function(data){
  console.log('tail error output: ' + data);
});

// Send data to child process.
