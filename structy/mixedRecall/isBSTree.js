// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const isBinarySearchTree = (root) => {
    const values = [];
    inOrderTraversal(root, values);
    return isSorted(values);
};

const inOrderTraversal = (root, values) => {
    if (!root) return;
    inOrderTraversal(root.left, values);
    values.push(root.val);
    inOrderTraversal(root.right, values);
}

const isSorted = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        const current = numbers[i];
        const next = numbers[i + 1];
        if (current > next) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isBinarySearchTree,
};
