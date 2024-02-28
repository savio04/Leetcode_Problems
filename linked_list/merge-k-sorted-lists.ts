/*
 * Problem: https://leetcode.com/problems/merge-k-sorted-lists/description/
 * */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function merge(firstList: ListNode | null, secondList: ListNode | null) {
  const dummy = new ListNode(0);
  let newItem: ListNode | null = dummy;

  while (firstList && secondList) {
    if (firstList.val <= secondList.val) {
      newItem.next = firstList;

      firstList = firstList.next;
    } else {
      newItem.next = secondList;

      secondList = secondList.next;
    }

    newItem = newItem.next;
  }

  if (firstList) {
    newItem.next = firstList;
  }

  if (secondList) {
    newItem.next = secondList;
  }

  return dummy.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;

  while (lists.length > 1) {
    let partialResult: (ListNode | null)[] = [];

    for (let index = 0; index < lists.length; index += 2) {
      partialResult.push(merge(lists[index], lists[index + 1] || null));
    }

    lists = partialResult;
  }

  return lists[0];
}
