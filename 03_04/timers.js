// 3 seconds
var waitTime = 3000;

var currentTime = 0;
var percentWaited = 0;
var waitInterval = 500;

// Creates/updates a single line with the amount of time
// that has been spent waiting
function writeWaitingPercent(percentage) {
	// erase existing waiting period and reset cursor to the start
	// so it can be overwritten
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${percentage}`);
}

// As long as this interval is running, the process is running.
// To stop intervals, you need to set them as variables and call
// clearInterval() later
var interval = setInterval(function() {
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercent(percentWaited);
}, waitInterval);



setTimeout(function() {
	// stop the interval from running
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\nDone\n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);