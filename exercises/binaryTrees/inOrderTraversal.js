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
const step = function (node, visitedNodes) {
  if (node == null) {
    return visitedNodes;
  }

  step(node.left, visitedNodes);
  visitedNodes.push(node.val);
  step(node.right, visitedNodes);

  return visitedNodes;
}

var inorderTraversal = function (root) {
  return step(root, []);
};
