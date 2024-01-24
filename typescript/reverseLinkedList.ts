function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev; // point at the previous node
        prev = curr; // move previous node up
        curr = next;
    }
    return prev;
};

