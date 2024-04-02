/*
 * Problem: https://leetcode.com/problems/kth-largest-element-in-a-stream/description
 * */

class KthLargest {
  private k: number;
  private heap: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = [...nums];

    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapfy(i);
    }

    while (this.heap.length > this.k) {
      this.remove();
    }
  }

  heapfy(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    let langest = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[langest]
    ) {
      langest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[langest]
    ) {
      langest = rightIndex;
    }

    if (langest !== index) {
      const tmp = this.heap[langest];
      this.heap[langest] = this.heap[index];
      this.heap[index] = tmp;

      this.heapfy(langest);
    }
  }

  remove() {
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapfy(i);
    }
  }

  add(val: number): number {
    let index = this.heap.length;

    this.heap.push(val);

    while (
      index > 0 &&
      this.heap[Math.trunc((index - 1) / 2)] > this.heap[index]
    ) {
      const tmp = this.heap[index];
      this.heap[index] = this.heap[Math.trunc((index - 1) / 2)];
      this.heap[Math.trunc((index - 1) / 2)] = tmp;

      index = Math.trunc((index - 1) / 2);
    }

    if (this.heap.length > this.k) {
      this.remove();
    }

    return this.heap[0];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
