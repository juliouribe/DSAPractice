/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // iterate through the array with two pointers
  // look at one value on left and see if any other numbers add up to target
  // revisitting values can be expensive so lets use a memo
  // is this array sorted?
  // are the values integers or strings?
  // are the values unique?
  // only return one solution if there is one in any order
  // otherwise return empty array
  // key: num, value: idx
  memo = {};
  for (let idx = 0; idx < nums.length; idx++) {
    const current = nums[idx];
    const remainder = target - current;
    // could do another for loop to scan to the right
    // but we're using a memo so we're going to put all values in there
    // and then eventually we'll get to the end of the list and have access to
    // all values so we don't need to scan right.
    // we only need to check if the memo contains the remainder and return the indexes.
    if (remainder in memo) {
      return [memo[remainder], idx];
    } else {
      memo[current] = idx;
    }
  }
  return []
};

nums = [2, 7, 11, 15]
target = 9
console.log(twoSum(nums, target)) // [0,1]

nums = [3, 2, 4]
target = 6
console.log(twoSum(nums, target)) // [1,2]

nums = [3, 3]
target = 6
console.log(twoSum(nums, target)) // [0,1]
