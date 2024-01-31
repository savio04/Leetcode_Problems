/*
 * Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * */

function lengthOfLongestSubstring(s: string): number {
  const resultSet = new Set();
  let result = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const letter = s[right];

    while (resultSet.has(letter)) {
      resultSet.delete(s[left]);
      left++;
    }

    resultSet.add(letter);
    result = Math.max(result, resultSet.size);
  }

  return result;
}
