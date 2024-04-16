/*
 * Problem: https://leetcode.com/problems/jump-game
 * */

function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;

  let jump = nums[0];
  const tests = new Map();

  while (jump) {
    if (jump >= nums.length - 1) return true;

    const future = jump + (nums[jump] || 0);

    if (tests.has(future) || future === jump) {
      tests.set(jump, false);
      jump -= 1;
    } else {
      jump += nums[jump];
    }
  }

  return false;
}
