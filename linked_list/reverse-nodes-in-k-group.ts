/*
 * Problem: https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 * */

/*
 * Todo
 * [] See other solutions
 * */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let left = new ListNode(0, head);
  let right: ListNode | null = left;

  let count = 0;
  let first = false;

  while (left.next && right) {
    if (count === k) {
      let prev = right.next;
      let curr = left.next;

      let stop = right.next;

      while (curr !== stop) {
        const next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next!;
      }

      let tmp = left.next;

      left.next = right;
      left = tmp;

      if (!first) {
        head = prev;
      }

      if (!first) first = true;

      right = stop; //stop is first element after the end of the group
      count = 1;
    }

    right = right ? right.next : null;
    count++;
  }

  return head;
}
