var Person = require("./lib/Person");

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

// event listener for a 'speak' event
ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

// event listener for George instance
george.on('speak', function(said) {
	console.log(`${this.name} -> ${said}`);
});

// Any listeners listening for the speak event
// will fire their custom callbacks
ben.emit('speak', 'You may delay, but time will not.');

george.emit('speak', 'It is far better to be alone, than to be in bad company.');
