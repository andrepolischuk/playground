'use strict';
const Buffer = require('buffer').Buffer;
const fs = require('fs');

fs.readFile('fixture.txt', function (err, buff) {
  console.log(buff);
  console.log(buff.toString());
});

const buff1 = new Buffer(2);
const buff2 = new Buffer([0, 1, 2, 5]);
const buff3 = new Buffer('Hello world');
console.log(buff1);
console.log(buff1.toString());
console.log(buff2);
console.log(buff2.toString());
console.log(buff3);
console.log(buff3.toString());
