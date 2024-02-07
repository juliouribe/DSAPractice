const mostFrequentChar = (s) => {
    /*
    Use a hash count to keep track of how many times a letter appears
    Once you have counts, iterate through string again to maintain order
    Assign letter to the largest cout.
    */
    const hash = {};
    for (const char of s) {
        if (!(char in hash)) {
            hash[char] = 0;
        }
        hash[char]++;
    }

    let letter = s[0];
    for (const char of s) {
        // Greater than but not equals ensures we keep the higher value that appeared first in the string
        if (hash[char] > hash[letter]) {
            letter = char;
        }
    }
    return letter
};

module.exports = {
    mostFrequentChar,
};
