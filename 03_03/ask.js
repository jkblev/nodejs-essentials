var questions = [
	"What is your name?",
	"What is your favorite hobby?",
	"What is your preferred programming language?"
];

var answers = [];

// Request data input from user
function ask(index) {
	process.stdout.write(`\n\n\n\n ${questions[index]}`);
	process.stdout.write("  >  ");
}

// Asynchronous event listener for data on the stdin object.
// So when there's any data sent to this application through the 
// terminal, this callback function will fire
process.stdin.on('data', function(data) {

	// save the data to the answers array
	answers.push(data.toString().trim());


	// Ask any more questions if they exist
	if (answers.length < questions.length) {
		ask(answers.length);
	}
	else {
		process.exit();
	}
})

// event listener for the process exiting
process.on('exit', function() {
	process.stdout.write("\n\n\n\n");
	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
	process.stdout.write("\n\n\n\n");
})

// Kick off the process by asking the first question.
ask(0);