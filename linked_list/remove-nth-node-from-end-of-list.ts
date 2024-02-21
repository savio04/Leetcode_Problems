/*
 * Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 * */

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;

  if (head.next === null && n === 1) return null;

  let leftCount = 0;
  let rightCount = 1;

  let top = new ListNode(0, head);
  let left = top;
  let right = head.next;

  while (right) {
    right = right.next;
    rightCount++;

    if (rightCount - leftCount > n) {
      left = left.next as ListNode;
      leftCount++;
    }
  }

  left.next = left?.next?.next || null;

  return top.next;
}
