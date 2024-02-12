const subsets = (elements) => {
    if (elements.length === 0) return [[]];

    const ele = elements[0];
    const remaining = elements.slice(1);
    const subsWithoutEle = subsets(remaining);
    const subsWithEle = subsWithoutEle.map((sub) => [ele, ...sub]);
    return [...subsWithoutEle, ...subsWithEle];
};

module.exports = {
    subsets,
};
