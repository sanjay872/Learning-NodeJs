// Description: setInterval is a function that will run a function at a given interval.
// Run: node Basics/10_event_loop/setInterval.js
// I will run first -> Hello World (repeats every 1 second)

setInterval(() => {
    console.log('Hello World');
}, 1000);
console.log('I will run first');