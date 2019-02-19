/* jshint maxdepth:2 */
/* jshint */

/**
 * @param {Date} date Date to label
 * @return {string} Label for time of day
 */
function getTimeOfDay(date) {
  const hours = date.getHours();

  if (hours < 10) {
    return 'Morning';
  }

  if (hours < 13) {
    return 'Before dinner';
  }

  if (hours < 18) {
    return 'Afternoon';
  }

  if (hours < 23) {
    return 'Evening';
  }

  return 'Night';
}

module.exports = getTimeOfDay;
