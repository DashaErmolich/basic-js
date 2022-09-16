const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!('repeatTimes' in options)) {
    options.repeatTimes = 1;
  }

  if (!('separator' in options)) {
    options.separator = '+';
  }

  if (('addition' in options)) {
    options.addition = String(options.addition);
  } else {
    options.addition = '';
  }

  if (!('additionRepeatTimes' in options)) {
    options.additionRepeatTimes = 1;
  }

  if (!('additionSeparator' in options)) {
    options.additionSeparator = '|';
  }

  let result = [];
  let addition = [];

  {
    let i = options.additionRepeatTimes - 1;
    while (i >= 0) {
      addition.push(options.addition);
      i--;
    }
  }

  addition = addition.join(`${options.additionSeparator}`);

  {
    let i = options.repeatTimes - 1;
    while (i >= 0) {
      result.push(String(str) + addition);
      i--;
    }
  }

  return result.join(`${options.separator}`);
}


module.exports = {
  repeater
};
