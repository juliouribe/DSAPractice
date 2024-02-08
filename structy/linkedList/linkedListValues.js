// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// iterative approach
// const linkedListValues = (head) => {
//   const result = [];
//   while (head) {
//     result.push(head.val);
//     head = head.next;
//   }
//   return result;
// };

// recursive approach
const linkedListValues = (node, result=[]) => {
    if (!node) return result;
    result.push(node.val);
    return linkedListValues(node.next, result);
  };


  module.exports = {
    linkedListValues,
  };
