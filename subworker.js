'use strict';

self.addEventListener('message', function (event) {
  console.log(event.data);
  self.postMessage('Hello Root');
}, false);
