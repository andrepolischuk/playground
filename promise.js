'use strict';
const fs = require('fs');

read('.editorconfig')
  .then(clean)
  .then(parseToObject)
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });

function read(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
}

function clean(str) {
  return str.replace(/^(\s*\n)/gm, '').replace(/^(\[.+\]\n)/gm, '');
}

function parseToObject(str) {
  var rows = str.replace(/\s=\s/gm, '=').split('\n');
  var conf = {};

  rows.forEach(function (val) {
    var field = val.split('=');
    conf[field[0]] = field[1];
  });

  return conf;
}
