const canConcat = (s, words, memo = {}) => {
    if (s in memo) return memo[s];

    if (s.length === 0) return true;

    for (let word of words) {
        if (s.startsWith(word)) {
            const suffix = s.slice(word.length);
            if (canConcat(suffix, words, memo)) {
                memo[s] = true;
                return true
            }
        }
    }

    memo[s] = false;
    return false;
};

module.exports = {
    canConcat,
};
