const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo = {}) => {
    const key = i + ',' + previous;
    if (key in memo) return memo[key];
    if (i === numbers.length) return 0;

    const current = numbers[i];
    const options = [];
    const dropCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
    options.push(dropCurrent);

    if (current > previous) {
        const keepCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
        options.push(keepCurrent);
    }
    memo[key] = Math.max(...options);
    return memo[key];
};

module.exports = {
    maxIncreasingSubseq,
};
