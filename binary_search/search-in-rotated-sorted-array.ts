/**
 * Problem: https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

function search(nums: number[], target: number): number {
  let left = 0;
  let rigth = nums.length - 1;

  while (left <= rigth) {
    const middle = Math.trunc((left + rigth) / 2);

    if (nums[middle] === target) return middle;

    if (nums[left] <= nums[middle]) {
      if (target < nums[left] || target > nums[middle]) {
        left = middle + 1;
      } else {
        rigth = middle - 1;
      }
    } else {
      if (target < nums[middle] || target > nums[rigth]) {
        rigth = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
}
