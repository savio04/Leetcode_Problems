/*
 * Problem: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * */
function maxScore(cardPoints: number[], k: number): number {
  let left = 0;
  let right = k - 1;
  let sum = 0;

  for (let index = 0; index < k; index++) {
    sum += cardPoints[index];
  }

  right = right - 1;
  left = cardPoints.length - 1;

  let result = sum;

  while (k > 0) {
    sum -= cardPoints[right + 1 > cardPoints.length - 1 ? 0 : right + 1];
    sum += cardPoints[left];

    result = Math.max(sum, result);

    right = right - 1 < 0 ? cardPoints.length - 1 : right - 1;
    left = left - 1 < 0 ? cardPoints.length - 1 : left - 1;

    k--;
  }

  return result;
}
