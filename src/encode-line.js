const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr = str.split('');
  let result = [];
  let counter;

  for (let i = 0; i < arr.length; i++) {

    if (!result.length) {
      result.push(arr[i])
    } else {
      if (result[result.length - 1] !== arr[i]) {
        counter = 1;
        result.push(arr[i]);
      } else {
        if (counter === 1 || !counter) {
          counter = 1;
          result.pop();
          result.push(counter += 1);
          result.push(arr[i]);
        } else {
          result.pop();
          result.pop();
          result.push(counter += 1);
          result.push(arr[i]);
        }

      }
    }
  }

  return result.join('');

}

module.exports = {
  encodeLine
};
