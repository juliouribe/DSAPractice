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
 * @return {number[]}
 */
function traverse(node, path) {
  if (!node) {
    return path;
  }

  path.push(node.val);
  traverse(node.left, path);
  traverse(node.right, path);

  return path;
}


var preorderTraversal = function (root) {
  return traverse(root, [])
};
