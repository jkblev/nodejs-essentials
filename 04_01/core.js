// Core Node Modules
//quick mini demo that shows you can use Core Modules to get a lot
// of things done without using NPM to install other libraries.


// To start, let's look at the Path module (https://nodejs.org/api/path.html)
// The path module provides utilities for workong with file and 
// directory paths. It can be accessed using require
// https://nodejs.org/api/globals.html#globals_require
var path = require('path');

// https://nodejs.org/api/util.html
// Util is a module that offers different utilities for app developers
// In this case, we wan to use util.log to return timestamps
var util = require('util');

// https://nodejs.org/api/v8.html
// v8 is a module that exposes APIs specific to the version of V8 built
// into the Node.js binary. We can use this to access things like memory
// usage
var v8 = require('v8');

util.log(path.basename(__filename) ); // pluck out base file from full path

// can use path module to create path strings
var directoryUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(directoryUploads);

util.log(v8.getHeapStatistics());

