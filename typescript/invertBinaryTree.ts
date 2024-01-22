/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(node: TreeNode | null): TreeNode | null {
    // We'll use recursion to go down nodes and swap the children.
    if (!node) {
        return node;
    }
    invertTree(node.left);
    invertTree(node.right);
    // Swap the children.
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    return node;
};
