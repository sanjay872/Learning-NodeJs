/*
    eventhough the setTimeout is set to 0ms, it will be executed after the current execution stack is empty.
    So, the output will be "first", "third", "second"
*/

console.log("first")
setTimeout(() => {
    console.log("second")
}, 0)
console.log("third")