var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(request, response) {

	console.log(`${request.method} request for ${request.url}`);

	if (request.url === "/") {
		fs.readFile("./public/index.html", "UTF-8", function(err, html) {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(html);
		});
	}
	else if (request.url.match(/.css$/)) {
		// create a read stream
		var cssPath = path.join(__dirname, 'public', request.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");

		response.writeHead(200, {"Content-Type": "text/css"});

		// once we have a read stream, we can pipe it to 
		// a writable stream (such as our response object)
		fileStream.pipe(response);
	}
	else if (request.url.match(/.jpg$/)) {
		var imagePath = path.join(__dirname, 'public', request.url);
		// binary data, so do not specify UTF-8
		var imageStream = fs.createReadStream(imagePath);

		response.writeHead(200, {"Content-Type": "image/jpeg"});

		imageStream.pipe(response);

	}
	else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.end("404 File Not Found");
	}

}).listen(3000);

console.log("File server is running on port 3000");