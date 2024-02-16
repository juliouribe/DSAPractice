const lexicalOrder = (word1, word2, alphabet) => {
    let i = 0;
    do {
        const left = alphabet.indexOf(word1[i]);
        const right = alphabet.indexOf(word2[i]);
        if (left < right) {
            return true;
        } else if (right < left) {
            return false;
        } else {
            i++;
        }
    } while (i < Math.max(word1.length, word2.length));
    return true;
};

module.exports = {
    lexicalOrder,
};
