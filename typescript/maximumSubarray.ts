function maxSubArray(nums: number[]): number {
    let maxSum = -(Infinity);
    let sum = 0;
    for (let num of nums) {
        sum += num;
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};
