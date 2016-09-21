'use strict';
const childProcess = require('child_process');
const fixture = 'temp-fixture';
const touch = childProcess.spawn('touch', [fixture]);
console.log('\ntouch', touch.pid);

touch.on('exit', function (code, signal) {
  console.log('touch exit', code, signal);

  childProcess.exec('ls', function (err, stdout) {
    console.log('\nls');
    console.log(stdout.trim());
    var rm = childProcess.fork('./sub.js');
    rm.send(fixture);

    rm.on('message', function (err, stdout) {
      if (err) throw err;
      console.log('\nrm', rm.pid);

      childProcess.exec('ls', function (err, stdout) {
        console.log('\nls');
        console.log(stdout.trim());
        rm.send(0);
      });
    });

    rm.on('exit', function (code, signal) {
      console.log('\nrm exit', code, signal);
    });
  });
});
