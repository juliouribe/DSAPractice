function search(nums: number[], target: number): number {
    /*
    We'll use binary search keeping in mind that we can have two sections of
    sorted values.
    */
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        // Now we'll check for sorting.
        // If the left side is sorted.
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
};
