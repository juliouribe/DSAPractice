function search(nums: number[], target: number): number {
    // iterative bsearch
    let low = 0;
    let high = nums.length;
    do {
        const mid = Math.floor(low + (high - low)/2);
        const value = nums[mid];
        if (value === target) {
            return mid;
        } else if (value > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);

    return -1;
};
