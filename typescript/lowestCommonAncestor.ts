class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function search(parent: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // If any of the parent, p, or q are null, return the value of parent.
    if (parent === null || p === null || q === null) {
        return parent;
    }
    // If both p and q values are larger than the parent, search the right side
    if (p.val > parent.val && q.val > parent.val) {
        return search(parent.right, p, q);
    }

    // If both are smaller, search the left side.
    if (p.val < parent.val && q.val < parent.val) {
        return search(parent.left, p, q);
    }

    // If both aren't larger or smaller then we found our LCA
    return parent;
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    return search(root, p, q);
};
