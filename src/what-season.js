const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const winter = 'winter';
 const spring = 'spring';
 const summer = 'summer';
 const autumn = 'autumn';

 
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  switch(date) {
    case winter:
      return winter;
      break;
    case spring:
      return spring;
      break;
    case summer:
      return summer;
      break;
    case autumn:
      return autumn;
      break;
  }

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    const isDate = date.getTime();
  } catch(error) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return winter;
  }

  if (month >= 2 && month < 5) {
    return spring;
  }

  if (month >= 5 && month < 8) {
    return summer;
  }

  if (month >= 8 && month < 11) {
    return autumn;
  }

}

module.exports = {
  getSeason
};
