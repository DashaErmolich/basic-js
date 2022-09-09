const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(membersNames) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(membersNames)) {
    return false
  }

  let teamName = [];

  membersNames.forEach(name => {

    if (typeof name === 'string') {
      name = name.trim();
      teamName.push(name[0].toUpperCase())
    }

  });

  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
