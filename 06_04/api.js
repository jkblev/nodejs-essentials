var http = require("http");
var data = require("./data/inventory");

http.createServer(function(request, response) {



	if (request.url === "/") {
		response.writeHead(200, {"Content-Type": "text/json"});
		response.end(JSON.stringify(data));
	}
	else if (request.url === "/instock") {
		listInStock(response);
	}
	else if (request.url === "/onorder") {
		listOnBackOrder(response);
	}
	else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.end("Whoops... Data not found");
	}

}).listen(3000);

console.log("Server is listening at port 3000");

function listInStock(response) {
	var inStock = data.filter(function(item) {
		return (item.avail === "In stock");
	});

	response.end(JSON.stringify(inStock));
}

function listOnBackOrder(response) {
	var onOrder = data.filter(function(item) {
		return (item.avail === "On back order");
	});

	response.end(JSON.stringify(onOrder));
}