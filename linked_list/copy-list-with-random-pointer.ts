/*
 * Problem: https://leetcode.com/problems/copy-list-with-random-pointer/description/
 * */

class NodeRandom {
  val: number;
  next: NodeRandom | null;
  random: NodeRandom | null;
  constructor(val?: number, next?: NodeRandom, random?: NodeRandom) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: NodeRandom | null): NodeRandom | null {
  const hashMap = new Map();

  const dummy = new NodeRandom(0);

  let currDummy: NodeRandom | null = dummy;
  let currHead = head;

  while (currHead) {
    const newNode = new NodeRandom(currHead.val);

    currDummy.next = newNode;
    currDummy = currDummy.next;

    hashMap.set(currHead, newNode);

    currHead = currHead.next;
  }

  currHead = head;
  currDummy = dummy.next;

  while (currHead) {
    if (hashMap.has(currHead.random)) {
      currDummy!.random = hashMap.get(currHead.random);
    }

    currDummy = currDummy!.next;
    currHead = currHead.next;
  }

  return dummy.next;
}
