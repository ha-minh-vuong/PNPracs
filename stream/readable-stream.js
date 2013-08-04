/**
 * readable-stream
 * PNPracs
 *
 * Created by Vuong on 8/4/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var fs = require('fs');

// File read stream.
fs.createReadStream('/path/to/file');
fs.on('data', function(data){
  console.log(data);
});
