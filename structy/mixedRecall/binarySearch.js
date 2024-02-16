const binarySearch = (numbers, target) => {
    let low = 0;
    let high = numbers.length - 1;
    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        if (numbers[mid] === target) {
            return mid;
        } else if (target < numbers[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

module.exports = {
    binarySearch,
};
