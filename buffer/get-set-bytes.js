/**
 * get-set-bytes.js
 * PNPracs
 *
 * Created by Vuong on 7/13/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


// Create a buffer.
//var buffer = new Buffer('Hello world', 'base64');
//var buffer = new Buffer(1024);          // create a 1024 byte buffer.
var buffer = new Buffer('Hello world');   // utf8 encoding.


// Access the 2nd position of buffer.
console.log(buffer[2]);                   // => 108


// Iterate over buffer content.
for (var i = 0; i < buffer.length; i++){
  console.log(buffer[i]);
}


// Slice a buffer. (share memory)
var sliceBuffer = buffer.slice(2, 6);
console.log(sliceBuffer.toString());


// Copy a buffer.
var buffer1 = new Buffer('This is a buffer.');
var buffer2 = new Buffer(20);

var target_start = 0;
var start = 2;
var end = 10;
// copy position start to end of the source buffer into position start of target buffer.
buffer1.copy(buffer2, target_start, start, end);


// Decode a buffer.
var str = buffer.toString();              // decode in utf8.

var str64 = buffer.toString('base64');

// transcode utf8 --> base64
var utf8Str = 'This is a string.';
var buff = new Buffer(utf8Str);
var base64Str = buff.toString('base64');
