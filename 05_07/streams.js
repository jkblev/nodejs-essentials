var fs = require("fs");


// Below is a simple implementation of reading data using readFile. 
// It works relatively fast, but the problem is that readFile waits
// until the entire file is read before invoking the callback and 
// passing the file contents.

// Furthermore, it buffers the entire file in one variable. If our big
// data app experiences heavy traffic, readFile is going to create
// latency and could impact our memory.

// So a better solution might be to implement a readable stream!
// fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {

// 	console.log(`File Read ${chatlog.length}`);

// });

// console.log("Reading File...\n");



// Reading data using a stream!!
var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

// event listener for the first data event
stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File...\n\n\n");
});

// listener for every data event, gathering all text data chunks
// and concatenating our data
stream.on("data", function(chunk) {
	process.stdout.write(`  chunk: ${chunk.length} |`);

	data += chunk;
});

// end event listener
stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File. ${data.length} \n\n\n`);

});