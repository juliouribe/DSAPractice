function isAnagram(s: string, t: string): boolean {
    const hash: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in hash) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (char in hash) {
            hash[char]--;
        } else {
            return false;
        }
    }
    return Object.values(hash).every(number => number === 0);
};
