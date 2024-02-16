// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const postOrder = (root) => {
    const path = [];
    walk(root, path);
    return path;
};

const walk = (node, path) => {
    if (!node) return;

    walk(node.left, path);
    walk(node.right, path);
    path.push(node.val);
}

module.exports = {
    postOrder,
};
