const EventEmitter = require("events");

// Streams are Event Emitters
// process.stdin, process.stdout

const myEE = new EventEmitter();

//if you run emit itself, it will not be emitted
//so make it immediate, so it will run at the end of program, like JAVA JOIN
setImmediate(() => {
  myEE.emit("EVENT_EMIT");
});

//subscribe -egistering - listening 
myEE.on("EVENT_EMIT", () => {
  console.log("Listen EE: is fired");
});

myEE.on("EVENT_EMIT", () => {
  console.log("Listen EE: is fired2");
});

//emit - spread: Spreading - Emitting
myEE.emit("EVENT_EMIT");
