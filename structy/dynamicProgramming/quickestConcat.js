const quickestConcat = (s, words) => {
    const result = _quickestConcat(s, words);

    if (result === Infinity) {
        return -1;
    } else {
        return result;
    }
};

const _quickestConcat = (s, words, memo = {}) => {
    if (s in memo) return memo[s];

    if (s === '') return 0;

    let min = Infinity;

    for (let word of words) {
        if (s.startsWith(word)) {
            const suffix = s.slice(word.length);
            const attempt = 1 + _quickestConcat(suffix, words, memo);
            min = Math.min(min, attempt);
        }
    }

    memo[s] = min;
    return min;
};

module.exports = {
    quickestConcat,
};
