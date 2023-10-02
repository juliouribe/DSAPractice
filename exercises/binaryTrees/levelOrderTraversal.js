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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // Create a queue
  // Shift
  // process current node
  // push in nieghbors/children
  // terminate when queue is empty
  let queue = [root];
  let output = []

  while (queue[0]) {
    let qLength = queue.length
    let row = [];
    for (let i = 0; i < qLength; i++) {
      let current = queue.shift();
      row.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    output.push(row);
  }

  return output;
};
