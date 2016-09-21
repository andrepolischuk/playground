'use strict';
const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const mimeTypes = {
  '.html': 'text/html',
  '.md': 'text/plain',
  '.txt': 'text/plain',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.css': 'text/css'
};

http.createServer(listener).listen(3000);

function listener(req, res) {
  const root = path.normalize(__dirname);
  let filePath = decodeURIComponent(url.parse(req.url).pathname);
  const extname = path.extname(filePath);
  if (!extname || ~filePath.indexOf('\0')) return sendError(req, res);
  filePath = path.normalize(path.join(root, filePath));

  fs.exists(filePath, function (exist) {
    if (!exist) return sendError(req, res);
    const mimeType = mimeTypes[extname] || 'text/plain';
    res.writeHead(200, {'Content-Type': mimeType + '; charset=utf-8'});
    fs.createReadStream(filePath).pipe(res);
  });
}

function sendError(req, res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Not found');
}
