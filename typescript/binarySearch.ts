function search(nums: number[], target: number): number {
    // Use recursion to find the target or return -1.
    // Base case. We don't have any nums left or the last one isn't it.
    if (nums.length === 0) return -1;
    if (nums.length === 1 && nums[0] !== target) return -1;

    const mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return search(nums.slice(0, mid), target);
    } else {
        const rez = search(nums.slice(mid + 1), target);
        if (rez > -1) {
            return rez + mid + 1;
        } else {
            return - 1;
        }
    }
};
