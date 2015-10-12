'use strict';
const worker = new Worker('subworker.js');

worker.addEventListener('message', function (event) {
  console.log(event.data);
}, false);

worker.postMessage('Hello Worker');
