const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!array) {
    throw new NotImplementedError('Not implemented');
  }
  array = array.flat();
  let counter = 0;
  array.forEach(element => {
    if (element === '^^') {
      counter += 1;
    }
  });
  return counter;
}

module.exports = {
  countCats
};


