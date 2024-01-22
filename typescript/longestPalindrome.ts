function longestPalindrome(s: string): number {
    let result = 0;
    const charFreq = new Map<string, number>();
    for (const c of s) {
        const currFreq = charFreq.get(c);
        if (currFreq === undefined) {
            charFreq.set(c, 1);
        } else {
            charFreq.set(c, currFreq + 1);
        }
    }

    let anyOddFreq = 0;
    for (const [_, frequency] of charFreq) {
        if (frequency % 2 === 0) {
            result += frequency;
        } else {
            result += frequency - 1;
            anyOddFreq = 1;
        }
    }
    return result + anyOddFreq;
};
