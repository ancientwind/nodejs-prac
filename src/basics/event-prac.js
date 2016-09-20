
var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('this is listener1');
}

var connectHandler = function connected() {
    console.log('connect successfully.');
    var fs_cb = require('./fs-callback');
    eventEmitter.emit('data_received');
};

eventEmitter.addListener('connection', listener1);

/**
 * $connection is the event name;
 * $connectHandler is the event listener/handler, which is the callback function.
 */
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
    console.log('data received successfully.');
});

console.log("event-prac: emit starts..........");

/**
 * setTimeout is provided by node.
 */
setTimeout(function () {
    eventEmitter.emit('connection');
}, 1000);

console.log("event-prac: the end..........");