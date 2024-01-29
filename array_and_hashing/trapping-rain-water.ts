/*
 * Problem: https://leetcode.com/problems/trapping-rain-water/description/
 * */

function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let maxLeft = height[left];
  let maxRight = height[right];

  let total = 0;

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);

      total += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);

      total += maxRight - height[right];
    }
  }

  return total;
}
