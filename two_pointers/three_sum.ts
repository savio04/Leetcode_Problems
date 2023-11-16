/**
 * Problem: https://leetcode.com/problems/3sum
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (const [index, number] of nums.entries()) {
    if (number === nums[index - 1]) continue;

    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = number + nums[left] + nums[right];

      if (sum === 0) {
        result.push([number, nums[left], nums[right]]);

        left++;

        while (nums[left] === nums[left - 1]) left++; //here this idea
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
