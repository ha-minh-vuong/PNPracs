/**
 * cps-style.js
 * PNPracs
 *
 * Created by Vuong on 7/14/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var fs = require('fs');


fs.readFile('../buffer/get-set-bytes.js', function(err, content){
  if (err) {
    throw  err;
  }
  console.log('File content: ', content.toString());
});

