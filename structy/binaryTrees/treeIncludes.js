// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   const stack = [root];

//   while (stack.length) {
//     const curr = stack.pop();
//     if (curr.val === target) {
//       return true;
//     }
//     if (curr.left) {
//       stack.push(curr.left);
//     }
//     if (curr.right) {
//       stack.push(curr.right);
//     }
//   }
//   return false;
// };

const treeIncludes = (node, target) => {
    if (!node) return false;
    if (node.val === target) return true;

    return treeIncludes(node.left, target) || treeIncludes(node.right, target);
};

module.exports = {
    treeIncludes,
};
