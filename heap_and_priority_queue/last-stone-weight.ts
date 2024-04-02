/*
 * Problem: https://leetcode.com/problems/last-stone-weight/description/
 * */

function lastStoneWeight(stones: number[]): number {
  function heapfy(index: number) {
    const leftIndex = 2 * index + 1;
    const rigthIndex = 2 * index + 2;

    let longest = index;

    if (leftIndex < stones.length && stones[leftIndex] > stones[longest]) {
      longest = leftIndex;
    }

    if (rigthIndex < stones.length && stones[rigthIndex] > stones[longest]) {
      longest = rigthIndex;
    }

    if (longest !== index) {
      const tmp = stones[longest];
      stones[longest] = stones[index];
      stones[index] = tmp;

      heapfy(longest);
    }
  }

  function add(value: number) {
    let index = stones.length;
    stones.push(value);

    while (index > 0 && stones[Math.trunc((index - 1) / 2)] < stones[index]) {
      const tmp = stones[index];
      stones[index] = stones[Math.trunc((index - 1) / 2)];
      stones[Math.trunc((index - 1) / 2)] = tmp;

      index = Math.trunc((index - 1) / 2);
    }
  }

  function remove(): number {
    const top = stones[0];
    stones[0] = stones[stones.length - 1];
    stones.pop();

    for (let index = Math.trunc(stones.length / 2) - 1; index >= 0; index--) {
      heapfy(index);
    }

    return top;
  }

  for (let index = Math.trunc(stones.length / 2) - 1; index >= 0; index--) {
    heapfy(index);
  }

  while (stones.length > 1) {
    const y = remove();

    const x = remove();

    if (x !== y) {
      add(y - x);
    }
  }

  return stones[0] || 0;
}
