const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let newArr = arr.filter(elem => elem !== -1).sort((a, b) => a - b);

  let indexesOfMinusOnes = [];

  arr.forEach((elem, idx) => {
    if (elem === -1) {
      indexesOfMinusOnes.push(idx);
    }
  })

  let result = new Array(arr.length);

  indexesOfMinusOnes.forEach(elem => result[elem] = -1);

  for (let i = 0; i < result.length; i++) {
    if (!(i in result)) {
      result[i] = newArr.shift()
    }
  }

  return result;

}

module.exports = {
  sortByHeight
};
