var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

	// Use a writable Stream to create a new markdown file
	var stream = fs.createWriteStream(realPerson.name + ".md");

	// start writing to the markdown file since the stream is open
	stream.write(`${realPerson.name}\n=======================\n\n`);

	// Create a new Markdown file

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {


		if (saying.toLowerCase().trim() === 'exit') {
			// Close the writable stream
			stream.close();
			rl.close();
		} else {
			realPerson.sayings.push(saying.trim());
			// Write Sayings to the markdown file we created above
			stream.write( `* ${saying.trim()} \n`);
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
	
});



