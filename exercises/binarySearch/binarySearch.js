const search = function (nums, target) {
  // write base cases and use recursion
  // look at the middle, if less than look at the left
  // if the target is larger, look at the right
  // Base cases
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  const mid = Math.floor(nums.length / 2)
  if (target === nums[mid]) {
    return mid;
  } else if (target < nums[mid]) {
    // Look at the left side
    const left = search(nums.slice(0, mid), target);
    if (left > -1) return left;
  } else {
    // Look at the right side
    const right = search(nums.slice(mid), target);
    if (right > -1) return right + mid;
  }

  return -1;
};
