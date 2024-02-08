// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (node, value = node.val) => {
    if (!node) return true;
    if (node.val !== value) return false;
    return isUnivalueList(node.next, node.val)
}

// const isUnivalueList = (head) => {
//   let curr = head;
//   let value = curr.val;
//   while (curr) {
//     if (curr.val !== value) {
//       return false;
//     }
//     curr = curr.next;
//   }
//   return true;
// };

module.exports = {
    isUnivalueList,
};
