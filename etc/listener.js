'use strict';
const EventEmitter = require('events').EventEmitter;
const foo = new EventEmitter();
let calls = 0;
let handlers = 0;
let start = new Date().getTime();

foo.on('bar', function () {
  const now = new Date().getTime();
  if (now < start + 1000) return;
  console.log(now);
  start = now;
  handlers++;
});

const interval = setInterval(function () {
  foo.emit('bar');
  calls++;
}, 250);

setTimeout(function () {
  clearInterval(interval);
  console.log(calls, handlers);
}, 5000);
