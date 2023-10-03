/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const getHeight = function (node) {
  if (!node) {
    return 0;
  }

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}


var maxDepth = function (root) {
  // Max Depth is also the height of the tree.
  // We need a depth first search (DFS) to reach leaf nodes.
  // Recursively call nodes until we hit null. Return the max height of the child nodes
  return getHeight(root)
};
