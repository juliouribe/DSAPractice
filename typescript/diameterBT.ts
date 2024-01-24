function getHeight(node: TreeNode | null): number {
    if (!node) {
        return 0;
    }

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    return Math.max(left, right) + 1;
}


function diameterOfBinaryTree(root: TreeNode | null): number {
    const left = getHeight(root.left);
    const right = getHeight(root.right);

    return left + right;
};
