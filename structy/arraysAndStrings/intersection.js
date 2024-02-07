const intersection = (a, b) => {
    const mySet = new Set();
    const result = [];
    for (const num of a) {
        mySet.add(num);
    }
    for (const num of b) {
        if (mySet.has(num)) {
            result.push(num);
        }
    }
    return result;
};

module.exports = {
    intersection,
};
