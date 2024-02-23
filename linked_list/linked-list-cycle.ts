/*
 * Problem: https://leetcode.com/problems/linked-list-cycle/description/
 * */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  const hashTable = new Set();

  while (head !== null && !hashTable.has(head)) {
    hashTable.add(head);
    head = head.next;
  }

  if (head === null) return false;

  return true;
}
