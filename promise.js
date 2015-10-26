'use strict';
const assert = require('assert');
const fs = require('fs');

read('.editorconfig')
  .then(function (res) {
    return res.replace(/^root/gim, 'hello');
  })
  .then(function (res) {
    console.log('Read editorconfig', res.indexOf('hello') === 0);
  })
  .catch(function (err) {
    console.log(err);
  });

Promise.all([read('.editorconfig'), read('fixture.txt')])
  .then(function (res) {
    console.log('Read editorconfig', res[0].indexOf('root') === 0);
    console.log('Read fixture', res[1].indexOf('Ivan') === 0);
  })
  .catch(function (err) {
    console.log(err);
  });

function read(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
}
