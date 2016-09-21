'use strict';
const worker = new Worker('sub.js');

worker.addEventListener('message', function (event) {
  console.log(event.data);
}, false);

worker.postMessage('Hello Worker');
