'use strict';
const fs = require('fs');
cat('.editorconfig');
cat('.config');

async function cat(fileName) {
  try {
    const config = await read(fileName);
    console.log(config);
  } catch (err) {
    console.error(err);
  }
}

function read(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
}
