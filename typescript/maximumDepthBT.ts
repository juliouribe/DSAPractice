function getHeight(node: TreeNode | null): number {
    if (!node) {
        return 0;
    }

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function maxDepth(root: TreeNode | null): number {
    return getHeight(root);
};
