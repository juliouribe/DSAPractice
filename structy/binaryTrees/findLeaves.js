// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const leafList = (root) => {
//   if (!root) return [];
//   const queue = [root]
//   const data = [];
//   while (queue.length) {
//     const curr = queue.shift();
//     if (curr.left === null && curr.right === null) {
//       data.push(curr.val);
//     }
//     if (curr.left) {
//       queue.push(curr.left);
//     }
//     if (curr.right) {
//       queue.push(curr.right);
//     }
//   }
//   return data;
// };

const walk = (node, leaves) => {
    if (!node) return leaves;
    if (node.left === null && node.right === null) {
        leaves.push(node.val);
        return leaves;
    }
    walk(node.left, leaves);
    walk(node.right, leaves);

    return leaves;
}

const leafList = (node) => {
    const leaves = [];
    walk(node, leaves);
    return leaves;
}

module.exports = {
    leafList,
};
