/**
 * path-manipulate.js
 * PNPracs
 *
 * Created by Vuong on 7/15/13.
 * Copyright (c) 2013 Vuong. All rights reserved.
 *
 */

var path = require('path');


// Normalizing path
path.normalize('/foo/bar//baz/asdf/quux/..'); // => '/foo/bar/baz/asdf'
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

// Join path
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

// Resolve path
path.resolve('/foo/bar', './baz'); // => /foo/bar/baz
path.resolve('/foo/bar', '/tmp/file/'); // => /tmp/file

// Extract components
path.dirname('/foo/bar/baz/asdf/quux.txt'); // => /foo/bar/baz/asdf

path.basename('/foo/bar/baz/asdf/quux.html'); // => quux.html

path.basename('/foo/bar/baz/asdf/quux.html', '.html'); // => quux

path.extname('/a/b/index.html'); // => '.html'   // Determine the extension
path.extname('/a/b.c/index'); // => ''
path.extname('/a/b.c/.'); // => ''
path.extname('/a/b.c/d.'); // => '.'

// Check the existence of a file
path.exists('/etc/passwd', function(exists){
  console.log('exists');
}); // => true
