// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeMinValue = (root) => {
//   let min = root.val;
//   let stack = [root];

//   while (stack.length) {
//     const curr = stack.pop();
//     min = Math.min(curr.val, min);
//     if (curr.left) {
//       stack.push(curr.left);
//     }
//     if (curr.right) {
//       stack.push(curr.right);
//     }
//   }
//   return min;
// };

const treeMinValue = (node) => {
    if (!node) return Infinity;

    const left = treeMinValue(node.left);
    const right = treeMinValue(node.right);

    return Math.min(node.val, left, right);
};

module.exports = {
    treeMinValue,
};
