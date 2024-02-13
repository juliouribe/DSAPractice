// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const flipTree = (node) => {
    if (!node) return;

    flipTree(node.left);
    flipTree(node.right);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    return node;
};

module.exports = {
    flipTree,
};
