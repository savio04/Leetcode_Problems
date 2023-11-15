/**
 * Problem: https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal 
 */

function areAlmostEqual(s1: string, s2: string): boolean {
  let count = 0;
  const diffLetter: string[] = [];

  for (let index = 0; index < s1.length; index++) {
    if (s1[index] === s2[index]) {
      count++;
    } else {
      diffLetter.push(...[s1[index], s2[index]]);
    }
  }

  if (count === s1.length) return true;

  if (diffLetter.length > 4) return false;

  let swap = false;

  if (diffLetter[0] === diffLetter[3] && diffLetter[1] === diffLetter[2])
    swap = true;

  return swap && count === s1.length - 2;
}

console.log(areAlmostEqual("bank", "kanb"));
