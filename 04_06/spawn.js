// https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
// The difference between spawn and exec (seen in 04_05) is that
// spawn is made for processes like this, where execute was made
// for asynchronouly synchronous processes (e.g. "ls")

// So if we have processes for small bits of data, they're perfect
// for exec. Spawn is made for longer, ongling processes with large
// amounts of data, like this example
var spawn = require('child_process').spawn;

var childProcess = spawn("node", ["alwaysTalking"]);

childProcess.stdout.on("data", function(data) {
	console.log(`STDOUT: ${data.toString()}`);
});

childProcess.on("close", function() {
	console.log("Child Process has ended.");

	process.exit();
});

setTimeout(function() {
	childProcess.stdin.write("stop");
}, 4000);