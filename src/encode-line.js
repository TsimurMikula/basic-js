const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrS = str.split('');
  let arrE = [];
  let arrR = [];
  let count = 0;


  for (let item of arrS) {
    if (!arrE.includes(item)) arrE.push(item);
  }

  for (let i = 0; i < arrE.length; i++) {
    for (let j = 0; j < arrS.length; j++) {
      if (arrE[i] === arrS[j]) count++;
    }    
    if (count == 1) {
      arrR.push(arrE[i]);
    } else {
      arrR.push(count);
      arrR.push(arrE[i]);
    }
    count = 0;
  }
  return arrR.join('');
  }

module.exports = {
  encodeLine
};
