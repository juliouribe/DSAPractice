const createCombinations = (items, k) => {
    if (items.length < k) return [];
    if (k === 0) return [[]];

    const first = items[0]; // a
    const partialCombos = createCombinations(items.slice(1), k - 1); // [b,c] 1
    const combosWithFirst = [];
    for (let combo of partialCombos) {
        combosWithFirst.push([first, ...combo]);
    }
    const combosWithoutFirst = createCombinations(items.slice(1), k);
    return [...combosWithFirst, ...combosWithoutFirst];
};

module.exports = {
    createCombinations,
};
