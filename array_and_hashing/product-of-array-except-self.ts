/**
 * Problem: https://leetcode.com/problems/product-of-array-except-self/
 */

function productExceptSelf(nums: number[]): number[] {
  let prefix = 1;
  let posfix = 1;

  const result: number[] = [prefix];

  for (let index = 0; index < nums.length - 1; index++) {
    const newValue = prefix * nums[index];
    prefix = newValue;

    result.push(newValue);
  }

  for (let index = nums.length - 1; index >= 0; index--) {
    const newValue = posfix * nums[index] * result[index - 1];
    posfix = posfix * nums[index];

    if (index - 1 >= 0) {
      result[index - 1] = newValue;
    }
  }

  return result;
}
