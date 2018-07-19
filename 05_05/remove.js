var fs = require("fs");

// Synchronously removing file
try {
	fs.unlinkSync("./lib/config.json");
}
catch (err) {
	console.log(err);
}

// asynchronous removal of file
fs.unlink("notes.md", function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("notes.md removed");
	}
});