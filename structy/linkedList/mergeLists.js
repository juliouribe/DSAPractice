class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeLists = (head1, head2) => {
    let head = new Node();
    let curr = head;
    while (head1 && head2) {
        if (head1.val < head2.val) {
            curr.next = head1;
            head1 = head1.next;
        } else {
            curr.next = head2;
            head2 = head2.next;
        }
        curr = curr.next;
    }
    if (head1) {
        curr.next = head1;
    }
    if (head2) {
        curr.next = head2;
    }
    return head.next;
};

module.exports = {
    mergeLists,
};
