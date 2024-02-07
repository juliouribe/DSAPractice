const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    const hash = {};
    for (const char of s1) {
        if (char in hash) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    for (const char of s2) {
        if (char in hash) {
            hash[char]--;
        } else {
            return false;
        }
    }
    return Object.values(hash).every(num => num === 0);
};

module.exports = {
    anagrams,
};
