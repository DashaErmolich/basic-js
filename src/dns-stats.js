const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let DNSCombinations = [];

  for (let i = 0; i < domains.length; i++) {
    let newTmp = domains[i].split('.');
    newTmp.push('');
    let DNSArr = newTmp.reverse();
    let allDNS = DNSArr.join('.');
    DNSCombinations.push(allDNS)
    for (let j = 0; j < DNSArr.length; j++) {
      if (DNSArr[j]) {
        DNSArr.pop();
        let combDNS = DNSArr.join('.');
        DNSCombinations.push(combDNS);
      }
    }
  }

  const DNSInfo = {};

  for (let i = 0; i < DNSCombinations.length; i++) {
    if (!DNSInfo[DNSCombinations[i]]) {
      DNSInfo[DNSCombinations[i]] = 1;
    } else {
      DNSInfo[DNSCombinations[i]]++;
    }
  }

  return DNSInfo;

}

module.exports = {
  getDNSStats
};
