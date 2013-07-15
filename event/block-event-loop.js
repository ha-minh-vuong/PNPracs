/**
 * block-event-loop.js
 * PNPracs
 *
 * Created by Vuong on 7/15/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


// The event loop is blocked by an infinite cycle inside the nextTick function below.
process.nextTick(function nextTick1(){
  var a = 0;
  while (true){
    a++;
  }
});


process.nextTick(function nextTick2(){
  console.log('This tick is never fired.');
});


setTimeout(function timeout(){
  console.log('This timeout callback function is not fired either.');
});

