/*
    In this example, we are reading a file using the fs module.
    The event loop will not wait for the file to be read, it will continue to execute the next task.
    When the file is read, the callback function will be executed.
*/

const {readFile} = require('fs');

console.log('start reading a file...');

readFile('../content/first.txt', 'utf8', (err, content) => {
  if (err) {
    console.log('error happened during reading the file');
    return console.log(err);
  }

  console.log(content);

  console.log('FIle reading is done!');
});

console.log('start new task...');