const permutations = (items) => {
    if (items.length === 0) return [[]];

    const first = items[0];
    const perms = permutations(items.slice(1));

    const fullPermutations = [];
    for (let perm of perms) {
        for (let i = 0; i <= perm.length; i++) {
            fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)])
        }
    }
    return fullPermutations;
};

module.exports = {
    permutations,
};
