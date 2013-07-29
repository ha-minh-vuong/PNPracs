/**
 * fs-module.js
 * PNPracs
 *
 * Created by Vuong on 7/29/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */

var fs = require('fs');


fs.stat('/etc/passwd', function(error, stats){
  if (error) {throw error;}
  console.log(stats);
});
//{ dev: 16777218,
//  mode: 33188,
//  nlink: 1,
//  uid: 0,
//  gid: 0,
//  rdev: 0,
//  blksize: 4096,
//  ino: 16868,
//  size: 4892,
//  blocks: 0,
//  atime: Mon Jul 29 2013 19:57:57 GMT+0700 (ICT),
//  mtime: Wed Dec 19 2012 11:45:26 GMT+0700 (ICT),
//  ctime: Wed Dec 19 2012 11:45:26 GMT+0700 (ICT) }


// Open a file
fs.open('/path/to/file', 'r', function(err, fd){
  // file descriptor
});

// Read from a file
fs.open('./path-manipulate.js', 'r',  function(err, fd){
  if (err) {throw err;}
  var readBuffer = new Buffer(1024),
      bufferOffset = 0,
      bufferLength = readBuffer.length,
      filePosition = 100;

  fs.read(fd,  readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes){
    if (err) {throw err;};
    console.log('just read' + readBytes + 'bytes.');
    if (readBytes > 0){
      console.log(readBuffer.slice(0, readBytes));
    }
  });
});

// Write to a file
fs.open('./my_file.txt', 'a', function opened(err, fd) {
  if (err) { throw err; }
  var writeBuffer = new Buffer('writing this string'),
    bufferPosition = 0,
    bufferLength = writeBuffer.length,
    filePosition = null;
  fs.write( fd,
    writeBuffer,
    bufferPosition,
    bufferLength,
    filePosition,
    function wrote(err, writeBytes) {
      if (err) { throw err; }
      console.log('wrote ' + writeBytes + ' bytes'); });
});
