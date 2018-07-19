var fs = require("fs");

// simple rename
fs.renameSync("./lib/project-config.js", "./lib/config.json");

console.log("Config json file has successfully been renamed");

// move file (async)
fs.rename("./lib/notes.md", "./notes.md", function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Notes.md has been moved successfully.")
	}
});