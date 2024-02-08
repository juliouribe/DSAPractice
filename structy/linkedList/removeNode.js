// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
    if (head.val === targetVal) return head.next;

    let curr = head;
    let prev = null;
    while (curr) {
        if (curr.val === targetVal) {
            break;
        }
        prev = curr;
        curr = curr.next;
    }
    // Remove node
    if (prev) prev.next = curr.next;
    curr.next = undefined;
    return head;
};

module.exports = {
    removeNode,
};
