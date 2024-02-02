/*
 * Problem: https://leetcode.com/problems/permutation-in-string
 *
 * PS: Organize the code better, it's ugly :)
 * */

function checkInclusion(s1: string, s2: string): boolean {
  let left = 0;
  let right = s1.length - 1;
  let result = true;

  const hashMapExpect = new Map();
  const hashMapResult = new Map();

  for (let index = 0; index < s1.length; index++) {
    if (hashMapExpect.has(s1[index])) {
      hashMapExpect.set(s1[index], hashMapExpect.get(s1[index]) + 1);

      continue;
    }

    hashMapExpect.set(s1[index], 1);
  }

  for (let index = left; index <= right; index++) {
    if (hashMapResult.has(s2[index])) {
      hashMapResult.set(s2[index], hashMapResult.get(s2[index]) + 1);

      continue;
    }

    hashMapResult.set(s2[index], 1);
  }

  for (const [key, value] of hashMapResult) {
    if (hashMapExpect.get(key) !== value) {
      result = false;
      break;
    }
  }

  if (result) return true;

  left++;
  right++;

  while (right < s2.length) {
    if (hashMapResult.has(s2[left - 1])) {
      const newValue = hashMapResult.get(s2[left - 1]) - 1;

      if (newValue === 0) {
        hashMapResult.delete(s2[left - 1]);
      } else {
        hashMapResult.set(s2[left - 1], newValue);
      }
    }

    if (hashMapResult.has(s2[right])) {
      hashMapResult.set(s2[right], hashMapResult.get(s2[right]) + 1);
    } else {
      hashMapResult.set(s2[right], 1);
    }

    result = true;

    for (const [key, value] of hashMapResult) {
      if (hashMapExpect.get(key) !== value) {
        result = false;
        break;
      }
    }

    if (result) return result;

    left++;
    right++;
  }

  return false;
}
