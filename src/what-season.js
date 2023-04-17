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
function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';

  if (Object.prototype.toString.call(date) === "[object Date]") {
    const numMonth = date.getUTCMonth();

    if (numMonth === 11 || numMonth === 0 || numMonth === 1) return 'winter';
    if (numMonth === 2 || numMonth === 3 || numMonth === 4) return 'spring';
    if (numMonth === 5 || numMonth === 6 || numMonth === 7) return 'summer';
    if (numMonth === 8 || numMonth === 9 || numMonth === 10) return 'autumn';
  } else {
    throw new Error('Invalid date!');  
  }
  }

module.exports = {
  getSeason
};
