/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // letter count hash
  const counts = {};
  for (char of s) {
    if (char in counts) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }
  for (char of t) {
    if (char in counts) {
      counts[char] -= 1;
      if (counts[char] < 0) {
        return false
      }
    } else {
      return false
    }
  }

  return true
};
