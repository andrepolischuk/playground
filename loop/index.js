'use stirct';

console.log('module start');

setTimeout(() => {
  console.log('timeout');

  process.nextTick(() => {
    console.log('after timeout');
  });
}, 0);

setImmediate(() => {
  console.log('immediate');
});

new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 0);
}).then(() => {
  console.log('promise resolve');
});

Promise.reject().catch(() => {
  console.log('promise reject');
});

process.nextTick(() => {
  console.log('after module end');
});

console.log('module end');
