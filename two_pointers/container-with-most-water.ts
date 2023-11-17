/**
 * Problem: https://leetcode.com/problems/container-with-most-water 
 */
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let maxResult = 0;

  while (left < right) {
    const currentAmount =
      (right - left) * Math.min(height[right], height[left]);

    if (currentAmount > maxResult) maxResult = currentAmount;

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxResult;
}

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
