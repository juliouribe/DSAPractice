// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const zipperLists = (head1, head2) => {
//   let tail = head1;
//   let left = head1.next;
//   let right= head2;
//   let count = 0;

//   while (left && right) {
//     if (count % 2 === 0) {
//       tail.next = right;
//       right = right.next;
//     } else {
//       tail.next = left;
//       left = left.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   if (left) {
//     tail.next = left;
//   }
//   if (right) {
//     tail.next = right;
//   }

//   return head1;
// };

const zipperLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperList(next1, next2);

    return head1;
}

module.exports = {
    zipperLists,
};
