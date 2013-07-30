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

