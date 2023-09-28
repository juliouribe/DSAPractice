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
const findHeight = function (node) {
  // base case when we reach a null node, we return
  if (node == null) {
    return 0;
  }

  const leftHeight = findHeight(node.left);
  const rightHeight = findHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}


var diameterOfBinaryTree = function (root) {
  // Find the largest height on the left side and the right side
  // Add them together and return that value
  const leftHeight = findHeight(root.left);
  const rightHeight = findHeight(root.right);

  return leftHeight + rightHeight;
};
