const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let trueIndexes = [];
  let falseIndexes = [];

  let matrixWidth;
  let matrixHeight = matrix.length;

  matrix.forEach((element, index) => {
    element.forEach((innerElement, innerIndex) => {
      matrixWidth = element.length;
      if (innerElement === true) {
        trueIndexes.push([index, innerIndex])
      } else {
        falseIndexes.push([index, innerIndex])
      }
    })
  });

  let resultMatrix = [];

  {
    let i = matrixHeight - 1;
    while (i >= 0) {
      resultMatrix.push([]);
      i--;
    }
  }

  resultMatrix.forEach(element => {
    let i = matrixWidth - 1;
      while (i >= 0) {
      element.push(0);
      i--;
    }
  })

  for (let i = 0; i < resultMatrix.length; i++) {
    for (let j = 0; j < resultMatrix[i].length; j++) {
      for (let k = 0; k < trueIndexes.length; k++) {

        if (i === trueIndexes[k][0] && j === trueIndexes[k][1]) {
          resultMatrix[i][j + 1] += 1;
          resultMatrix[i + 1][j + 1] += 1;
          resultMatrix[i + 1][j] += 1;

          if (i >= 1 && j >= 1) {
            resultMatrix[i][j - 1] += 1;
            resultMatrix[i - 1][j - 1] += 1;
            resultMatrix[i - 1][j] += 1;
            resultMatrix[i + 1][j - 1] += 1;
            resultMatrix[i - 1][j + 1] += 1;
          }
        }
      }
    }
  }

  return resultMatrix;

}

module.exports = {
  minesweeper
};
