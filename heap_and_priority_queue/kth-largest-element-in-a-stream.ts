class KthLargest {
  private k: number;
  private heap: number[];
  private nums: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums;
    this.heap = [...nums];

    this.heapfy(0);
  }

  heapfy(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    let langest = index;

    if (
      rightIndex < this.heap.length &&
      this.heap[leftIndex] > this.heap[index]
    ) {
      langest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] > this.heap[index]
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

  removeMax(): number {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];

    this.heapfy(0);

    return max;
  }

  add(val: number): number {
    let index = this.heap.length;

    this.heap.push(val);
    this.nums.push(val);

    while (
      index > 0 &&
      this.heap[Math.trunc((index - 1) / 2)] < this.heap[index]
    ) {
      const tmp = this.heap[index];
      this.heap[index] = this.heap[Math.trunc((index - 1) / 2)];
      this.heap[Math.trunc((index - 1) / 2)] = tmp;

      index = Math.trunc((index - 1) / 2);
    }

    console.log("after", this.heap);

    let max = -Infinity;

    // if(this.heap[this.k-1])

    return this.heap[this.k - 1] > this.heap[this.k - 2]
      ? this.heap[this.k - 2]
      : this.heap[this.k - 1];
  }
}
