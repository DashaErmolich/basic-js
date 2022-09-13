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
    this.isInnerMode = false;
  }

  calculateDepth(array) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let flattenArr = array.flat();

    for (let i = 0; i < array.length; i++) {

      if (Array.isArray(array[i])) {
        this.depth += 1;
        this.isInnerMode = true;
        this.calculateDepth(flattenArr);

     } else {
      this.isInnerMode = false;
      continue;
     }
    }
    
    if (this.isInnerMode === false) {
      const result = this.depth;
      this.depth = 1;
      return result;
    } else {
      return this.depth
    }
  }
}



module.exports = {
  DepthCalculator
};

const newD = new DepthCalculator();
console.log(newD.calculateDepth([1, []]))
