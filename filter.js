'use strict';
const res = filter([5, 1, 5, 5, 3, 8, 0, 4, 7, 6, 2, 9, 10]);
console.log(res);

function filter(input) {
  let output = [];

  input.forEach(function (value, i) {
    const result = [value];
    const j = input.lastIndexOf(10 - value);

    if (j > i) {
      result.push(input.splice(j, 1)[0]);
      output.push(result);
    }
  });

  return output;
}
