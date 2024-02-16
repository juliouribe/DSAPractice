// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const binarySearchTreeIncludes = (root, target) => {
    let curr = root;
    while (curr) {
        if (curr.val === target) {
            return true;
        } else if (curr.val < target) {
            curr = curr.right;
        } else {
            curr = curr.left;
        }
    }

    return false;
};

module.exports = {
    binarySearchTreeIncludes,
};
