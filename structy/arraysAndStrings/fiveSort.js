const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const value = nums[i];
        if (value === 5) {
            nums[i] = nums[j];
            nums[j] = value;
            j--;
        } else {
            i++;
        }
    }
    return nums;
};

module.exports = {
    fiveSort,
};
