'use strict';
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const input = fs.createReadStream('../fixture');
const output = fs.createWriteStream('fixture.gz')
input.pipe(gzip).pipe(output);

fs.readdir(__dirname, function (err, files) {
  console.dir(files);
  fs.unlink(output.path);
});
