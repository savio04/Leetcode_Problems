/*
 *Problem: https://leetcode.com/problems/permutations/description
 * */

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length === 1) return [nums];

  const size = nums.length;

  for (let index = 0; index < size; index++) {
    const num = nums.shift(); //Remove first num
    const perms = permute([...nums]); //Make permutation without num

    for (const perm of perms) {
      perm.push(num!); //Add num to permutations
    }

    result.push(...perms); //Add result
    nums.push(num!); //Put num to end
  }

  return result;
}
