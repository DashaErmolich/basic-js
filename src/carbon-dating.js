const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the sampleAge of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated sampleAge in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const LN_OF_2 =  0.693;
  const C14_HALF_LIFE_PERIOD = 5730;
  const C14_MODERN_ACTIVITY = 15;

  if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || (sampleActivity <= 0) || sampleActivity > MODERN_ACTIVITY) {
    return false
  }

  sampleActivity = Number(sampleActivity);

  let sampleAge;

  const rateConst = LN_OF_2 / C14_HALF_LIFE_PERIOD;
  const lnOfActivitiesDeviation = Math.log(C14_MODERN_ACTIVITY / sampleActivity);

 sampleAge = lnOfActivitiesDeviation / rateConst;

  return Math.ceil (sampleAge);
}

module.exports = {
  dateSample
};
