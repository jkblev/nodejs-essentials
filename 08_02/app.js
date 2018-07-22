var express = require("express");

var app = express();


app.use(function(request, response, next) {
	// log details of request
	console.log(`${request.method} request for ${request.url}`);

	// send a response back and continue to the next step
	next();
});

app.use(express.static("./public"));

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;