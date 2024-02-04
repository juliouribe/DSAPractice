function productExceptSelf(nums: number[]): number[] {
    const len = nums.length
    const leftToRight: number[] = new Array(len).fill(1);
    const rightToLeft: number[] = new Array(len).fill(1);
    const res: number[] = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        leftToRight[i] = leftToRight[i - 1] * nums[i - 1];
        rightToLeft[len - i - 1] = rightToLeft[len - i] * nums[len - i];
    }

    for (let i = 0; i < len; i++) {
        res[i] = leftToRight[i] * rightToLeft[i];
    }

    return res;
};
