/*
 * Problem: https://leetcode.com/problems/koko-eating-bananas/description/
 * */
function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  let result = Infinity;

  while (left <= right) {
    const middle = Math.trunc((left + right) / 2);
    let hours = 0;

    for (const bananas of piles) {
      hours += Math.ceil(bananas / middle);
    }

    if (hours <= h) {
      right = middle - 1;
      result = Math.min(result, middle);
    }

    if (hours > h) left = middle + 1;
  }

  return result;
}
