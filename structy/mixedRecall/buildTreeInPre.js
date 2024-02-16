class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const buildTreeInPre = (inOrder, preOrder) => {
    if (inOrder.length === 0) return null;
    const value = preOrder[0];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftInOrder = inOrder.slice(0, mid);
    const rightInOrder = inOrder.slice(mid + 1);
    const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
    const rightPreOrder = preOrder.slice(leftInOrder.length + 1);
    root.left = buildTreeInPre(leftInOrder, leftPreOrder);
    root.right = buildTreeInPre(rightInOrder, rightPreOrder);
    return root;
};

module.exports = {
    buildTreeInPre,
};
