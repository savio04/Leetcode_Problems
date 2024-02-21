/*
 * Problem: https://leetcode.com/problems/merge-two-sorted-lists/description/
 * */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let head = new ListNode();
  let newList = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next;
    }

    newList = newList.next;
  }

  while (list1) {
    newList.next = list1;
    list1 = list1.next;

    newList = newList.next;
  }

  while (list2) {
    newList.next = list2;
    list2 = list2.next;

    newList = newList.next;
  }

  return head.next;
}
