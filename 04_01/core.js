// Core Node Modules

// To start, let's look at path (https://nodejs.org/api/path.html)
// The path module provides utilities for workong with file and 
// directory paths. It can be accessed using require
// https://nodejs.org/api/globals.html#globals_require

var path = require('path');


console.log(path.basename(__filename) ); // pluck out base file from full path

// can use path module to create path strings
var directoryUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(directoryUploads);