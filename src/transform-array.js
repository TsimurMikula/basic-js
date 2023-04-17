const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  if (arr.length === 0) return arr;
  
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && arr[i+2] === '--discard-prev') i += 3;
    if (arr[i] === '--discard-next') i += 2;
    if (arr[i] === '--discard-prev') {
      res.pop(arr[i-1]);
      i++;
    }
    if (arr[i] === '--double-next' && arr[i+1] === undefined) i++;
    if (arr[i] === '--double-next') {
      i++;
      res.push(arr[i]); 
    }
     if (arr[i] === '--double-prev' && arr[i-2] === '--discard-next') i++;
     if (arr[i] === '--double-prev' && arr[i-1] === undefined) i++;
    if (arr[i] === '--double-prev') {
      res.push(arr[i-1]);
      i++;
    }
    if (arr[i] === undefined) continue;
    else res.push(arr[i]); 
  }
  return res;
}

module.exports = {
  transform
};
