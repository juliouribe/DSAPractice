const Height = function (root) {
  // Use recursion to traverse the tree and keep track of the height.
  // If we notice a discrepancy if more than 1 on either side, then we return -1
  if (root == null) return 0;

  let leftHeight = Height(root.left);
  let rightHeight = Height(root.right);
  // bubble up once we find a a descrepancy on one of the subtrees.
  if (leftHeight == -1 || rightHeight == -1) return -1;

  // Otherwise check if there is a mismatch between heights. Non-incluse means we need at least 2 difference.
  if (Math.abs(leftHeight - rightHeight > 1)) return -1;

  // If its all good so far, go back up a node and add 1.
  return Math.max(leftHeight, rightHeight) + 1;
}

var isBalanced = function (root) {
  if (root == null) return true;

  if (Height(root) == -1) return false;
  return true;
};
