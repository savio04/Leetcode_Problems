/*
 * Problem: https://leetcode.com/problems/lru-cache/description/
 * */

class NodeItem {
  key: number;
  val: number;
  prev: NodeItem | null;
  next: NodeItem | null;

  constructor(key: number, val: number, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  private hashmap: Map<number | string, NodeItem>;
  private MRU: NodeItem = new NodeItem(0, 0);
  private LRU: NodeItem = new NodeItem(0, 0);
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.hashmap = new Map();

    this.MRU.prev = this.LRU;
    this.LRU.next = this.MRU;
  }

  addToList(node: NodeItem) {
    const prev = this.MRU.prev!;
    prev.next = node;
    this.MRU.prev = node;

    node.prev = prev;
    node.next = this.MRU;
  }

  deleteFromList(node: NodeItem) {
    const prev = node.prev!;
    const next = node.next!;

    prev.next = next;
    next.prev = prev;
  }

  get(key: number): number {
    if (this.hashmap.has(key)) {
      const node = this.hashmap.get(key)!;

      //Remove
      this.deleteFromList(node);

      //Add
      this.addToList(node);

      return node.val;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.hashmap.has(key)) {
      const node = this.hashmap.get(key)!;

      //Remove from list
      this.deleteFromList(node);
    }

    const newNode = new NodeItem(key, value);

    //Add in list
    this.addToList(newNode);

    this.hashmap.set(key, newNode);

    if (this.hashmap.size > this.capacity) {
      const last = this.LRU.next!;

      this.hashmap.delete(last.key);

      //Remove from list
      this.deleteFromList(last);
    }
  }
}
