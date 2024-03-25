/*
 * Problem: https://leetcode.com/problems/swap-nodes-in-pairs/description
 * */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const dummy = new ListNode(0, head);
  let prev = dummy;
  let current = dummy.next;

  while (current !== null && current.next !== null) {
    const third = current.next.next;
    const second = current.next;

    current.next = third;
    second.next = current;

    prev.next = second;

    prev = current;
    current = third;
  }

  return dummy.next;
}
