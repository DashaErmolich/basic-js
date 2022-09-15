const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = [];
  let uniq = [];
  let counter = 0;

  for (let i = 0; i < names.length; i++) {
    if (!result.length) {
      counter = 0;
      result.push(names[i]);
      uniq.push(names[i]);
    } else {
      if (uniq.includes(names[i])) {
        counter += 1;
        names[i] += `(${counter})`;
        result.push(names[i])
        uniq.push(names[i])
      } else {
        counter = 0;
        result.push(names[i]);
        uniq.push(names[i]);
      }
    }
  }
  return result;

}

module.exports = {
  renameFiles
};
