const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.counter = 0;
  }


  calculateDepth(array) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let counter = 0;

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        counter += 1;
        this.counter +=1;
        break;
      } 
    }

    this.depth += counter;

    if (counter !== 0) {
      let flattenArr = array.flat();
      this.calculateDepth(flattenArr);
    } 

    if (this.counter === 0) {
      const result = this.depth;
      this.depth = 1;
      return result
    } else {
      this.counter -= 1;
    }
  }
}

module.exports = {
  DepthCalculator
};
