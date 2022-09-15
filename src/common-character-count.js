const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given secondCharInfo strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let counter = 0;

  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();

  function countChar(array) {
    const arrInfo = {};

    for (let i = 0; i < array.length; i++) {
      if (!arrInfo[array[i]]) {
        arrInfo[array[i]] = 1;
      } else {
        arrInfo[array[i]]++;
      }
    }

    return arrInfo;
  }

  const firstCharInfo = countChar(arr1);
  const secondCharInfo = countChar(arr2);

  const firstKeys = Object.keys(firstCharInfo);
  const secondKeys = Object.keys(secondCharInfo);

  let commonKeys = [];

  for (let i = 0; i < firstKeys.length; i++) {
    if (secondKeys.includes(firstKeys[i])) {
      commonKeys.push(firstKeys[i]);
    }
  }

  for (let i = 0; i < commonKeys.length; i++) {
    if (firstCharInfo[commonKeys[i]] === secondCharInfo[commonKeys[i]]) {
      counter += firstCharInfo[commonKeys[i]];
    } else if (firstCharInfo[commonKeys[i]] < secondCharInfo[commonKeys[i]]) {
      counter += firstCharInfo[commonKeys[i]];
    } else {
      counter += secondCharInfo[commonKeys[i]];
    }
  }

  return counter;

}


module.exports = {
  getCommonCharacterCount
};
