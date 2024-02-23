/*
 * Problem: https://leetcode.com/problems/reorder-list/description/
 * */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  let stack: number[] = [];

  let curr = head;

  while (curr) {
    stack.push(curr.val);
    curr = curr.next;
  }

  let left = 0;
  let right = stack.length - 1;

  curr = head;

  while (left <= right && curr) {
    curr.val = stack[left];

    if (curr.next) curr.next.val = stack[right];

    curr = curr.next ? curr.next.next : curr.next;

    left++;
    right--;
  }
}
