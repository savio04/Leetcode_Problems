/**
 * Problem: https://leetcode.com/problems/search-in-rotated-sorted-array/
 */
function search(nums: number[], target: number): number {
  const minIndex = nums.indexOf(Math.min(...nums));
  const indexes: number[] = [];

  let items = 0;
  let currentIndex = minIndex;

  while (items != nums.length) {
    if (currentIndex === nums.length) {
      currentIndex = 0;
      continue;
    }

    indexes.push(currentIndex);
    currentIndex++;
    items++;
  }

  let left = 0;
  let right = indexes.length - 1;

  while (left <= right) {
    const middle = Math.trunc((right + left) / 2);
    const index = indexes[middle];

    if (nums[index] === target) return index;

    if (nums[index] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(search([5,1,3], 5));
