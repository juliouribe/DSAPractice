// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const linkedListFind = (head, target) => {
//   let curr = head;
//   while (curr) {
//     if (curr.val === target) {
//       return true;
//     }
//     curr = curr.next;
//   }
//   return false;
// };

const linkedListFind = (node, target) => {
    if (!node) return false;
    if (node.val === target) return true;
    return linkedListFind(node.next, target);
};

module.exports = {
    linkedListFind,
};
