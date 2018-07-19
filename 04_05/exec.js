// https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
// execute commands using child process module
var exec = require("child_process").exec;

exec("ls", function(err, stdout) {
	if (err) {
		throw err;
	}
	console.log("Listing Finished");
	console.log(stdout);
});
