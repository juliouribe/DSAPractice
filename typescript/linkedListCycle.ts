/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let curr = head;
    let fast = curr;
    while (fast && fast.next) {
        fast = fast.next.next;
        curr = curr.next;
        if (fast === curr) {
            return true;
        }
    }
    return false;
};
