/*
 * Problem: https://leetcode.com/problems/longest-repeating-character-replacement/
 * */

function characterReplacement(s: string, k: number): number {
  let left = 0;
  let right = 0;
  let result = 0;
  let maxFreq = 0;

  const hashMap = new Map();

  while (right < s.length) {
    if (hashMap.has(s[right])) {
      const curr = hashMap.get(s[right]);

      hashMap.set(s[right], curr + 1);
    } else {
      hashMap.set(s[right], 1);
    }

    maxFreq = Math.max(maxFreq, hashMap.get(s[right]));

    if (right - left + 1 - maxFreq > k) {
      const curr = hashMap.get(s[left]);

      hashMap.set(s[left], curr - 1);

      left += 1;
    }

    result = Math.max(result, right - left + 1);
    right++;
  }

  return result;
}
