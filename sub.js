'use strict';
const childProcess = require('child_process');

process.on('message', function (name) {
  if (name === 0) process.exit(0);

  childProcess.exec('rm ' + name, function (err, stdout) {
    process.send(err, stdout);
  });
});
