/**
 * plus-one.js
 * PNPracs
 *
 * Created by Vuong on 8/3/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


process.stdin.resume();
process.stdin.on('data', function(data){
  var number;
  try {
    number = parseInt(data.toString(), 10);
    number += 1;
    // output
    process.stdout.write(number + '\n');
  } catch (err) {
    process.stderr._write(err.message + '\n');
  }
})

