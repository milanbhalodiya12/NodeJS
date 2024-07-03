// Importing the Event
const EventEmmiter = require('events');
// Creating Object of event
const event = new EventEmmiter;

// Declaring the event
event.on("milanBhalodya", (msg) => {
    console.log(msg);
});

// Calling the Event
event.emit("milanBhalodiya", "Hello I am a Mca student. As well as a node JS Professional Programmer");
