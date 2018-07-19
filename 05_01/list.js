var fs = require("fs");


// read the files synchronously
// var files = fs.readdirSync('./lib');
// console.log(files);

// Read the files asynchronously (don't block the single event thread)
fs.readdir('./lib', function(err, files) {
	if (err) {
		throw err;
	}
	console.log(files);
});

console.log("Reading files...");