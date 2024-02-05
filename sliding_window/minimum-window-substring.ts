/*
 * Problem: https://leetcode.com/problems/minimum-window-substring
 * */
function minWindow(s: string, t: string): string {
  let left = 0;
  let right = 0;

  const hashMapExpect = new Map();
  const hashMapResult = new Map();

  for (let index = 0; index < t.length; index++) {
    const curr = hashMapExpect.get(t[index]) || 0;

    hashMapExpect.set(t[index], curr + 1);
  }

  let result = "";
  let have = 0;
  let need = hashMapExpect.size;
  let resultLength = Infinity;
  let resultLeft = 0,
    resultRight = 0;

  while (right < s.length) {
    const curr = hashMapResult.get(s[right]) || 0;
    hashMapResult.set(s[right], curr + 1);

    if (
      hashMapExpect.has(s[right]) &&
      hashMapExpect.get(s[right]) === hashMapResult.get(s[right])
    ) {
      have++;
    }

    while (have === need) {
      const curr = hashMapResult.get(s[left]) || 0;
      hashMapResult.set(s[left], curr - 1);

      if (right - left + 1 < resultLength) {
        resultLength = right - left + 1;
        resultLeft = left;
        resultRight = right;
      }

      if (
        hashMapExpect.has(s[left]) &&
        hashMapResult.get(s[left]) < hashMapExpect.get(s[left])
      ) {
        have--;
      }

      left++;
    }

    right++;
  }

  for (let index = resultLeft; index <= resultRight; index++) {
    result += s[index];
  }

  return result;
}
