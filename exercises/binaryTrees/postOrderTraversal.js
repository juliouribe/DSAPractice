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

function search(node, path) {
  if (!node) {
    return path;
  }

  search(node.left, path);
  search(node.right, path);
  path.push(node.val);

  return path;
}

var postorderTraversal = function (root) {
  return search(root, []);
};
