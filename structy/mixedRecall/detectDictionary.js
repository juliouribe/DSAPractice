const inOrder = (a, b, alphabet) => {
    const length = Math.max(a.length, b.length);
    for (let i = 0; i < length; i++) {
        const aVal = alphabet.indexOf(a[i]);
        const bVal = alphabet.indexOf(b[i]);
        if (aVal < bVal) {
            return true;
        } else if (aVal > bVal) {
            return false;
        }
    }
    return true;
}

const detectDictionary = (dictionary, alphabet) => {
    for (let i = 0; i < dictionary.length - 1; i++) {
        const left = dictionary[i];
        const right = dictionary[i + 1];
        if (!inOrder(left, right, alphabet)) {
            return false;
        }
    }
    return true;
};

module.exports = {
    detectDictionary,
};
