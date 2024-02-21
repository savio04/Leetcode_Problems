/*
 * Problem: https://leetcode.com/problems/add-two-numbers/
 * */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let newList = new ListNode(0);
  let head = newList;
  let dont = 0;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + dont;

    const result = sum % 10;
    dont = Math.trunc(sum / 10);

    head.next = new ListNode(result);

    if (l1) l1 = l1.next;

    if (l2) l2 = l2.next;

    head = head.next;
  }

  if (dont > 0) {
    const newNode = new ListNode(dont);
    head.next = newNode;
    head = head.next;
  }

  return newList.next;
}
