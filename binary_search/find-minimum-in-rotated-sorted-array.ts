/*
 * Problem: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * */

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.trunc((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left];
}
