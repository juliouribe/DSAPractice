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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // start at root, swap the children
  // go down left, swap the children
  // go down right, swap the children
  // keep going until this.left and this.right are null
  // base case
  if (root === null) {
    return root;
  }

  invertTree(root.left);
  invertTree(root.right);
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};
