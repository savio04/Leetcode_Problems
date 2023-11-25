/**
 * Problem: https://leetcode.com/problems/find-peak-element
 */
function findPeakElement(nums: number[]): number {
  if (nums.length === 1) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.trunc((left + right) / 2);

    if (
      nums[middle] >= nums[Math.min(middle + 1, right)] &&
      nums[middle] >= nums[Math.max(middle - 1, left)]
    ) {
      return middle;
    }

    if (nums[middle] < nums[middle - 1]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(findPeakElement([1,2,3,4]));
