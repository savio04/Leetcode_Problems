/**
 * Problem: https://leetcode.com/problems/group-anagrams/description/
 */

function groupAnagrams(strs: string[]): string[][] {
  const hashMap = new Map();

  for (const str of strs) {
    const sorted = str.split("").sort().join("");

    if (hashMap.has(sorted)) {
      const curr = hashMap.get(sorted);

      hashMap.set(sorted, [...curr, str]);
    } else {
      hashMap.set(sorted, [str]);
    }
  }

  return Array.from(hashMap.values());
}
