const mergeSort = (nums) => {
    if (nums.length <= 1) return nums;

    const pivot = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, pivot));
    const right = mergeSort(nums.slice(pivot));

    return merge(left, right);
};

const merge = (left, right) => {
    const result = [];
    left.reverse();
    right.reverse();
    while (left.length && right.length) {
        if (left[left.length - 1] < right[right.length - 1]) {
            result.push(left.pop());
        } else {
            result.push(right.pop());
        }
    }
    while (left.length) {
        result.push(left.pop());
    }
    while (right.length) {
        result.push(right.pop());
    }

    return result;
}

module.exports = {
    mergeSort,
};
