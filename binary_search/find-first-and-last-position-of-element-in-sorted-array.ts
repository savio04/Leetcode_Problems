/**
 * Problem: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.trunc((left + right) / 2);

    if (nums[middle] === target) {
      let leftResult = middle;
      let rightResult = middle;

      while (nums[leftResult-1] === target) leftResult--;
      while (nums[rightResult+1] === target) rightResult++;

      return [leftResult, rightResult];
    } else if (nums[middle] > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

console.log(searchRange([1], 1));
//[7,8,8,8,8,8,8,8,8,8,8,9] target = 8
