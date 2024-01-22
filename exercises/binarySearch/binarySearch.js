const search = function (nums, target) {
  // write base cases and use recursion
  // look at the middle, if less than look at the left
  // if the target is larger, look at the right
  // Base cases
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0: -1;

  const mid = Math.floor(nums.length/2);
  if (nums[mid] === target) {
      return mid
  } else if (target < nums[mid]) {
      return search(nums.slice(0, mid), target)
  } else {
      const result = search(nums.slice(mid + 1), target);
      if (result > -1) {
          return result + mid + 1;
      }
      return result;
  }
};

var searc2 = function(nums, target) {
    if (nums.length === 0) return -1;
    if (nums.length === 1 && nums[0] !== target) return -1;

    const mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) {
        return mid;
    } else if (target < nums[mid]) {
        return search(nums.slice(0, mid), target);
    } else {
        const res = search(nums.slice(mid+1), target);
        if (res >= 0) {
            return res + mid + 1
        } else {
            return -1;
        }
    }
};

var searckWhile = function(nums, target) {
    let lo = 0;
    let hi = nums.length;
    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo)/2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return -1
};
