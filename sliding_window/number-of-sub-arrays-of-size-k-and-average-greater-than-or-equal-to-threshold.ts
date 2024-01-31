/*
 * Problem: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
 * */
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let left = 0;
  let right = k - 1;
  let result = 0;

  let sum = 0;

  while (right < arr.length) {
    if (sum === 0) {
      for (let index = left; index <= right; index++) {
        sum += arr[index];
      }
    } else {
      sum -= arr[left - 1];
      sum += arr[right];
    }

    if (sum / k >= threshold) result++;

    left++;
    right++;
  }

  return result;
}
