var http = require("http");

// Anytime a request is made of the server, our callback function is invoked
// The request object will contain information about the requested headers,
// any data, as well as info about the user, like their environment.

// The response object is blank, and it is our job in the callback function
// to complete the response
var server = http.createServer(function(request, response) {

	// write response headers
	response.writeHead(200, {"Content-Type": "text/html"});

	response.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${request.url}</p>
				<p>${request.method}</p>
			</body>
		</html>
	`);
});

server.listen(3000);

console.log("Server Listening on port 3000");