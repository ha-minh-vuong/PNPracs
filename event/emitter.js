/**
 * emitter.js
 * PNPracs
 *
 * Created by Vuong on 7/14/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyClass = function(){

};

util.inherits(MyClass, EventEmitter);

MyClass.prototype.someMethod = function(){
  this.emit('custom event', 'argument 1', 'argument 2');
};

// when the someMethod method is called on an instance of MyClass,
// the example emits an event named custom event.
// The event also emits some data, in this case two strings: "argument 1" and "argument 2".
// This data will be passed along as arguments to the event listeners.
// Clients of MyClass instances can listen to the event named custom event like this:
var myInstance = new MyClass();
myInstance.on('custom event', function(str1, str2) {
  console.log('got a custom event with the str1 %s and str2 %s!', str1, str2);
});


// Build a pseudo-class named Ticker that emits a “tick” event every second.
var Ticker = function(){
  var self = this;
  setInterval(function(){
    self.emit('tick');
  }, 1000)
};

util.inherits(Ticker, EventEmitter);

// Client of this class could instantiate this Ticker class and listen for the event 'tick' like so:
var ticker = new Ticker();

ticker.on('tick', function(){
  console.log('Hey, tick');
});