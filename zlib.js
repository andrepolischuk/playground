'use strict';
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const input = fs.createReadStream('fixture.txt');
const output = fs.createWriteStream('fixture.txt.gz')
input.pipe(gzip).pipe(output);

fs.readdir(__dirname, function (err, files) {
  console.dir(files);
  fs.unlink(output.path);
});
