/*
 * Problem: https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 * */

function findKthLargest(nums: number[], k: number): number {
  function heapfy(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    let longest = index;

    if (leftIndex < nums.length && nums[leftIndex] > nums[longest]) {
      longest = leftIndex;
    }

    if (rightIndex < nums.length && nums[rightIndex] > nums[longest]) {
      longest = rightIndex;
    }

    if (longest !== index) {
      const tmp = nums[longest];
      nums[longest] = nums[index];
      nums[index] = tmp;

      heapfy(longest);
    }
  }

  function remove() {
    nums[0] = nums[nums.length - 1];
    nums.pop();

    heapfy(0);
  }

  for (let index = Math.trunc(nums.length / 2) - 1; index >= 0; index--) {
    heapfy(index);
  }

  while (k > 1) {
    remove();
    k--;
  }

  return nums[0];
}
