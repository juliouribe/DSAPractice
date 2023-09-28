/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var reverseList = function(head) {
//     let prev = null;
//     let current = head; // pointed at one

//     while (current) {
//         let next = current.next // Assign pointer to node 2
//         current.next = prev // Assign first node's next to null. It's at the end
//         prev = current // Assign prev to first node
//         current = next // move current to the next node
//     }
//     return prev
// };
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let reversed = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return reversed;
}

// 1: 1, 2
// 2: 2, 3
// 3: 3, 4
// 4: 4, 5
// 5: 5,
