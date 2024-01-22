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

function getHeight(node: TreeNode | null): number {
    if (!node) {
        return 0;
    }
    // Find respective heights using recursion.
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    // If either are negative bubble up
    if (leftHeight === -1 || rightHeight === -1) return -1;

    // Check if the difference is more than one.
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    return getHeight(root) !== -1
};
