// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeValueCount = (root, target) => {
//   const stack = [root];
//   let count = 0;
//   if (!root) {
//     return count;
//   }

//   while (stack.length) {
//     const curr = stack.pop();
//     if (curr.val === target) {
//       count++;
//     }
//     if (curr.left) {
//       stack.push(curr.left);
//     }
//     if (curr.right) {
//       stack.push(curr.right);
//     }
//   }
//   return count;
// };

const treeValueCount = (node, target) => {
    if (!node) return 0;
    const match = node.val === target ? 1 : 0;
    return match + treeValueCount(node.left, target) + treeValueCount(node.right, target);
};


module.exports = {
    treeValueCount,
};
