// Collecting Information with Readline

// https://nodejs.org/api/readline.html
// The readline module provides an interface for reading data from a Readable
// stream (such as process.stdin) one line at a time. This allows us to 
// prompt the user for data without interacting with stdin and stdout directly
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// JavaScript object
var realPerson = {
	name: '',
	sayings: []
};


rl.question("what is the name of a real person? ", function (answer) {
	realPerson.name = answer;

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {
		// Update realPerson object
		realPerson.sayings.push(saying.trim());

		// handle end case
		if (saying.toLowerCase().trim() === 'exit') {
			rl.close(); // close the readline instance
		}
		else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);

			rl.prompt();			
		}

	});
});

// listen for a close readline event
rl.on('close', function() {
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
});