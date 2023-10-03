/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // an array of numbers. We're gonna use hash and iterate over the nums.
  // The hash is a counter. Once we hit the same number twice we return true.
  const counts = {};
  for (const num of nums) {
    if (num in counts) {
      return true;
    } else {
      counts[num] = true;
    }
  }
  return false;
};
