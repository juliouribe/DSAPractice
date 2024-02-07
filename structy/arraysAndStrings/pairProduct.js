const pairProduct = (numbers, targetProduct) => {
    const hash = {};
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const complement = targetProduct / num;
        if (complement in hash) {
            return [hash[complement], i];
        } else {
            hash[num] = i;
        }
    }
    return [];
};

module.exports = {
    pairProduct,
};
