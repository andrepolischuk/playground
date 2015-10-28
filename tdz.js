'use strict';
const assert = require('assert');
const foo = 'hello';

(function () {
  try {
    foo;
  } catch (err) {
    assert(err instanceof ReferenceError);
  }

  let foo = 'bar';
})();

(function () {
  let foo;
  assert(foo === undefined);
  foo = 'bar';
})();
