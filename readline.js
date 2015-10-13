'use strict';
const readline = require('readline');
const input = readline.createInterface(process.stdin, process.stdout, null);

input.question('What do you think? ', function (answer) {
  console.log('You say: %s', answer);
  input.close();
});

input.on('close', function () {
  console.log('\nBye!');
});
