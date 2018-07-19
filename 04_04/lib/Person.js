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

// Make this module available to our other modules
module.exports = Person;