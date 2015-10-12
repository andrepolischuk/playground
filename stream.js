'use strict';
const http = require('http');
const fs = require('fs');
const server = http.createServer(listener);
const fixture = 'fixture.txt';
server.listen(3000);

function listener(req, res) {
  const url = req.url.substr(1);
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200);

  if (url === 'file') {
    fs.readFile(fixture, 'utf8', function (err, data) {
      res.end(data);
    });
  }

  if (url === 'pipe') {
    fs.createReadStream(fixture).pipe(res);
  }

  if (url === 'chunk') {
    const read = fs.createReadStream(fixture);

    read.on('data', function (chunk) {
      res.write(chunk);
    });

    read.on('end', function () {
      setTimeout(function () {
        res.end('\nEnd');
      }, 2000);
    });
  }
}
