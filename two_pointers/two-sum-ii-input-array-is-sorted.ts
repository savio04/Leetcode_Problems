/**
 * Problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 */

function twoSum(numbers: number[], target: number): number[] {
  let result: number[] = [];
  let left = 0
  let right = numbers.length - 1

  while(left < right) {
    const sum = numbers[left] + numbers[right]

    if(sum === target) {
      result = [left+1, right+1]
      break;
    } else if(sum > target) {
      right--
    } else {
      left++
    }
  }

  return result;
}

console.log(twoSum([2,7,11,15], 9))
