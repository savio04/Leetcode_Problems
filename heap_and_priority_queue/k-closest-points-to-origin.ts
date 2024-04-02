/*
 * Problem: https://leetcode.com/problems/k-closest-points-to-origin/description/
 * */

function kClosest(points: number[][], k: number): number[][] {
  const distances = new Map();
  const minHeap: number[] = [];

  function heapfyDown(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    let longest = index;

    if (leftIndex < minHeap.length && minHeap[leftIndex] > minHeap[longest]) {
      longest = leftIndex;
    }

    if (rightIndex < minHeap.length && minHeap[rightIndex] > minHeap[longest]) {
      longest = rightIndex;
    }

    if (longest !== index) {
      const tmp = minHeap[longest];
      minHeap[longest] = minHeap[index];
      minHeap[index] = tmp;

      heapfyDown(longest);
    }
  }

  function heapfyUp() {
    let index = minHeap.length - 1;

    while (index > 0 && minHeap[Math.trunc((index - 1) / 2)] < minHeap[index]) {
      const tmp = minHeap[Math.trunc((index - 1) / 2)];
      minHeap[Math.trunc((index - 1) / 2)] = minHeap[index];
      minHeap[index] = tmp;

      index = Math.trunc((index - 1) / 2);
    }
  }

  function remove() {
    minHeap[0] = minHeap[minHeap.length - 1];
    minHeap.pop();

    heapfyDown(0);
  }

  for (const [x, y] of points) {
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    minHeap.push(distance);

    heapfyUp();

    if (distances.has(distance)) {
      const curr = distances.get(distance);

      curr.push([x, y]);

      distances.set(distance, curr);
    } else {
      distances.set(distance, [[x, y]]);
    }

    if (minHeap.length > k) {
      remove();
    }
  }

  const result: number[][] = [];

  for (const key of new Set(minHeap)) {
    result.push(...distances.get(key));
  }

  return result;
}
