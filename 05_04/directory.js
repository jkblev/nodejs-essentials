var fs = require("fs");

// check to see if the directory exists
// before we try to create it
if (fs.existsSync("lib")) {
	console.log("Directory already exists");
}
else {
	fs.mkdir("lib", function(err) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Directory Created");
		}

	});
}