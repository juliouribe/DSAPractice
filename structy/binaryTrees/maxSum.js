// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (node) => {
    if (!node) return -Infinity;
    if (node.left === null && node.right === null) return node.val;

    return node.val + Math.max(maxPathSum(node.left), maxPathSum(node.right));
};

module.exports = {
    maxPathSum,
};
