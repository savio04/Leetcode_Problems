/*
 * Problem: https://leetcode.com/problems/task-scheduler/description
 * */

function leastInterval(tasks: string[], n: number): number {
  let heap: number[] = [];
  const queue: number[][] = [];
  const countTasks = new Map();
  let time = 0;

  function heapfyDown(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    let longest = index;

    if (leftIndex < heap.length && heap[leftIndex] > heap[longest]) {
      longest = leftIndex;
    }

    if (rightIndex > 0 && heap[rightIndex] > heap[longest]) {
      longest = rightIndex;
    }

    if (longest !== index) {
      const tmp = heap[index];
      heap[index] = heap[longest];
      heap[longest] = tmp;

      heapfyDown(longest);
    }
  }

  for (const task of tasks) {
    if (countTasks.has(task)) {
      let curr = countTasks.get(task);

      countTasks.set(task, (curr += 1));
    } else {
      countTasks.set(task, 1);
    }
  }

  function removeMax(): number {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();

    heapfyDown(0);

    return top;
  }

  heap = [...countTasks.values()];

  for (let index = Math.trunc(heap.length / 2 - 1); index >= 0; index--) {
    heapfyDown(index);
  }

  while (heap.length || queue.length) {
    time++;

    if (heap.length) {
      const count = removeMax() - 1;

      if (count > 0) {
        queue.push([count, time + n]);
      }
    }

    if (queue.length && queue[0][1] === time) {
      const first = queue.shift()!;

      let index = heap.length;
      heap.push(first[0]);

      while (index > 0 && heap[Math.trunc((index - 1) / 2)] < heap[index]) {
        const tmp = heap[Math.trunc((index - 1) / 2)];
        heap[Math.trunc((index - 1) / 2)] = heap[index];
        heap[index] = tmp;

        index = Math.trunc((index - 1) / 2);
      }
    }
  }

  return time;
}
