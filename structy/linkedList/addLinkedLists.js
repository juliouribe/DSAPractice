class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1, head2) => {
    const dummy = new Node(null);
    let curr = dummy;
    let left = head1;
    let right = head2;
    while (left && right) {
        let total = left.val + right.val;
        let remainder = 0;
        if (total > 10) {
            const node = new Node(total % 10);
            remainder = 1;
        }
        const node = new Node();
        curr.next = node;
        curr = node;
        left = left.next;
        left.val += remainder;
        right = right.next;
    }
    while (left) {
        curr.next = left;
        left = left.next;
        curr = curr.next;
    }
    while (right) {
        curr.next = right;
        right = right.next;
        curr = curr.next;
    }
    return dummy.next;
};

const addListsSolution = (head1, head2) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;

    let carry = 0;
    let current1 = head1;
    let current2 = head2;
    while (current1 !== null || current2 !== null || carry !== 0)  {
      const val1 = current1 === null ? 0 : current1.val;
      const val2 = current2 === null ? 0 : current2.val;
      const sum = val1 + val2 + carry;
      carry = sum > 9 ? 1 : 0;

      const digit = sum % 10;
      tail.next = new Node(digit);
      tail = tail.next;

      if (current1 !== null) current1 = current1.next;
      if (current2 !== null) current2 = current2.next;
    }

    return dummyHead.next;
  };

module.exports = {
    addLists,
};
