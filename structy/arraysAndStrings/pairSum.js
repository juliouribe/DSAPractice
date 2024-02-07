const pairSum = (numbers, targetSum) => {
    // Keys are the elements, values are the indexes.
    const hash = {};
    for (let i = 0; i < numbers.length; i++) {
        const curr = numbers[i];
        const remainder = targetSum - curr;
        if (remainder in hash) {
            return [hash[remainder], i];
        } else {
            hash[curr] = i;
        }
    }
    return [];
};

module.exports = {
    pairSum,
};
