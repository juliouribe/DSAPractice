// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
    if (!node) return -1;

    const left = howHigh(node.left);
    const right = howHigh(node.right)

    return Math.max(left, right) + 1;
};

module.exports = {
    howHigh,
};
