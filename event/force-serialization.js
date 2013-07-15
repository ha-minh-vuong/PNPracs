/**
 * force-serialization.js
 * PNPracs
 *
 * Created by Vuong on 7/15/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */


var interval = 1000;   // 1 second

(function schedule(){
  setTimeout(function do_it(){
    my_async_function(function(){
      console.log('async done!');
      schedule();
    });
  }, interval);
}());