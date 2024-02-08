// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeSum = (root) => {
//   if (!root) return 0;
//   let sum = 0;
//   let stack = [root];

//   while(stack.length) {
//     const curr = stack.pop();
//     sum += curr.val;
//     if (curr.left) {
//       stack.push(curr.left);
//     }
//     if (curr.right) {
//       stack.push(curr.right);
//     }
//   }
//   return sum;
// };

const treeSum = (node) => {
    if (!node) return 0;

    return node.val + treeSum(node.left) + treeSum(node.right);
};

module.exports = {
    treeSum,
};
