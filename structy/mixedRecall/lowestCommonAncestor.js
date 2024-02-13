// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const findPath = (node, target) => {
    if (node === null) return null;
    if (node.val === target) return [node.val];

    const leftPath = findPath(node.left, target);
    if (leftPath !== null) {
        leftPath.push(node.val);
        return leftPath;
    }
    const rightPath = findPath(node.right, target);
    if (rightPath !== null) {
        rightPath.push(node.val);
        return rightPath;
    }
    return null;
}

const lowestCommonAncestor = (root, val1, val2) => {
    // We found and built the paths in reverse order.
    const path1 = findPath(root, val1);
    const path2 = findPath(root, val2);
    const set2 = new Set(path2);

    for (const val of path1) {
        if (set2.has(val)) {
            return val;
        }
    }
};

module.exports = {
    lowestCommonAncestor,
};
