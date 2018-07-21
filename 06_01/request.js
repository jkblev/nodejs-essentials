var https = require("https");
var fs = require("fs");

// In order to make an http request, we need
// an object literal of request options
var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

// Once our request has started, the callback function will
// be invoked, giving us access to our response object. 
// The response object implements the stream interface.
// e.g. we want to get the George Washington wiki page sent
// to us from the Wikipedia server as a stream
var request = https.request(options, function (response) {

	var responseBody = "";

	console.log("Response from server has started.");
	console.log(`Server Status: ${response.statusCode} `);
	console.log("Response Headers: %j", response.headers);

	response.setEncoding("UTF-8");

	// The "data" events represent our access to the data 
	// stream, so each chunk of data will be passed as
	// an argument to the event handler's callback functions

	// handle the first data event
	response.once("data", function(chunk) {
		console.log(chunk);
	});

	// handle every data event
	response.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	// handle ending event
	response.on("end", function() {
		fs.writeFile("george-washington.html", responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("File Downloaded.");
		});
	})

});

request.on("error", function(err) {
	console.log(`problem with request: ${err.message}`);
});

request.end();