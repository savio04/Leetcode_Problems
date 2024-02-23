// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

/*Interactive*/
// function reverseList(head: ListNode | null): ListNode | null {
//   let prev = null
//   let curr = head
//   let next = null

//   while(curr !== null) {
//     next = curr.next
//     curr.next = prev
//     prev = curr
//     curr = next
//   }

//   return prev
// };

/**Recursion */
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const rest = reverseList(head.next);

  head.next.next = head;

  head.next = null;

  return rest;
}
