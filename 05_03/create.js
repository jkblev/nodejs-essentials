var fs = require("fs");

// create a new markdown file
var md = `

Sample Markdown Title
=====================

Sample subtitle
---------------

* point
* point
* point

`;

// Now write this text to a file
fs.writeFile("sample.md", md.trim(), function(err) {

	console.log("File Created!");
	
});