// function isValidBST(root: TreeNode | null): boolean {
//     if (!root) {
//         return true;
//     }

//     let stack: TreeNode[] = [];
//     let current: TreeNode | null = root;
//     let prev: TreeNode | null = null;

//     while(current || stack.length) {
//         // Loop down the left side and find the smallest value.
//         while (current) {
//             stack.push(current);
//             current = current.left;
//         }
//         current = stack.pop();
//         if (prev !== null && current.val <= prev.val) return false;
//         // Prev goes from the smallest value, to the mid value (parent)
//         prev = current;
//         // Current because the right value, which is the larger in the trio.
//         current = current.right;
//     }
//     return true;
// };
function isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
    if (root === null) return true;

    if (root.val <= min || root.val >= max) {
        return false;
    }

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}
