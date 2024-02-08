// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const reverseList = (head) => {
//   let prev = null;  // point left
//   let curr = head;  // point mid
//   while (curr) {
//     let next = curr.next; // point right/update right
//     curr.next = prev; // assign behind
//     prev = curr;  // update left
//     curr = next;  // update mid
//   }
//   return prev;
// };

const reverseList = (curr, prev = null) => {
    if (!curr) return prev;
    const next = curr.next;
    curr.next = prev;
    return reverseList(next, curr);
}

module.exports = {
    reverseList,
};
