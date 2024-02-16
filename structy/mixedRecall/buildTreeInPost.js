class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const buildTreeInPost = (inOrder, postOrder) => {
    if (inOrder.length === 0) return null;
    const value = postOrder[postOrder.length - 1];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftInOrder = inOrder.slice(0, mid);
    const rightInOrder = inOrder.slice(mid + 1);
    const leftPostOrder = postOrder.slice(0, leftInOrder.length);
    const rightPostOrder = postOrder.slice(leftInOrder.length, postOrder.length - 1);
    root.left = buildTreeInPost(leftInOrder, leftPostOrder);
    root.right = buildTreeInPost(rightInOrder, rightPostOrder);
    return root;
};

module.exports = {
    buildTreeInPost,
};
