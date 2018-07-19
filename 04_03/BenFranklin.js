// Handling pub/sub events with EventEmitter
// https://nodejs.org/api/events.html#events_class_eventemitter
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

// The Person object inherits all of the functionality
// of the EventEmitter.
// e.g. a Person object will have an on() function for
// the event listener
util.inherits(Person, EventEmitter);

var ben = new Person("Ben Franklin");

// event listener for a 'speak' event
ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

// Any listeners listening for the speak event
// will fire their custom callbacks
ben.emit('speak', 'You may delay, but time will not.');