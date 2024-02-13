// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const middleValue = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.val;
};

module.exports = {
    middleValue,
};
