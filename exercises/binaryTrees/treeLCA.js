// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */

// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  */
const search = function (parent, small, large) {
  // Once we hit a "leaf" node we should return.
  if (parent.left === null || parent.right === null) {
    return null;
  }

  // If we have children, we should see if the parent has the value of the small and right is large
  if (parent.val === small.val && parent.right.val === large.val) {
    return parent.val;
  } else if (parent.left.val === small.val && parent.right.val === large.val) {
    return parent.val;
  }
  // If the smaller value is less than the parent, we should search on the left node
  if (small.val < parent.val) {
    return search(parent.left, small, large);
    // If the small value is larger than the parent we should check the right side.
  } else {
    return search(parent.right, small, large);
  }
}

var lowestCommonAncestor = function (root, p, q) {
  // could do binary search until we find p or q
  // once find or p or q we can check that trio to see if they share a parent
  // or one if one of them is the parent with another as a child

  /*
  Depth first search (recursion is typically depth first)
  Keep going until we found a node where the children have no children.
  Look at all three nodes, are P and Q in either of them?
  */
  if (p.val < q.val) {
    return search(root, p, q)
  }
  return search(root, q, p)
};

// const search = (node, p, q) => {
//   // If reached leaf, LCA not found
//   if (!node) return null;

//   // Current node is LCA
//   if (node === p || node === q) return node;

//   // Value is between p and q, so current node is LCA
//   if (p.val < node.val && q.val > node.val) {
//     return node;
//   }

//   // Recurse left or right
//   return search(
//     p.val < node.val ? node.left : node.right,
//     p,
//     q
//   );
// }

// var lowestCommonAncestor = (root, p, q) => {
//   return search(root, p, q);
// }
