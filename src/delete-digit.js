const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numToArr = String(n).split('');

  let numCombinations = []

  for (let i = 0; i < numToArr.length; i++) {
    let tmp = [...numToArr];
    tmp.splice(i, 1);
    const num = Number(tmp.join(''));
    numCombinations.push(num);
  }

  return Math.max(...numCombinations)

}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(152))
