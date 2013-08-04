/**
 * writable-stream.js
 * PNPracs
 *
 * Created by Vuong on 8/4/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var fs = require('fs');

// Write file stream.
fs.createWriteStream('/path/to/file');
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file.
fs.write('This sentence will be written to the file.');
