/*
 * Problem: https://leetcode.com/problems/longest-consecutive-sequence/
 * */

function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let bigger = 0;

  for (const num of numsSet) {
    let len = 0;

    if (!numsSet.has(num - 1)) {
      while (numsSet.has(num + len)) {
        len++;
      }
    }

    bigger = Math.max(bigger, len);
  }

  return bigger;
}
