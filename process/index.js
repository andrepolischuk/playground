'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  switch (chunk.trim()) {
    case 'argv':
      console.log('argv', process.argv);
      return;
    case 'memory':
      console.log('memory', process.memoryUsage());
      return;
    case 'cwd':
      console.log('cwd', process.cwd());
      return;
    case 'pid':
      console.log('pid', process.pid);
      return;
    case 'arch':
      console.log('arch', process.arch);
      return;
    case 'platform':
      console.log('platform', process.platform);
      return;
    default:
      process.exit(0);
  }
});

process.on('exit', function () {
  console.log('exit');
});
