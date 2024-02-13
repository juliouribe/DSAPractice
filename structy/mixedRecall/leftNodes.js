// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leftyNodes = (node, result = [], level = 0) => {
    if (node === null) return result;
    if (result[level] === undefined) result.push(node.val);

    leftyNodes(node.left, result, level + 1);
    leftyNodes(node.right, result, level + 1);

    return result;
};

module.exports = {
    leftyNodes,
};
