/**
 * Problem: https://leetcode.com/problems/check-if-a-string-can-break-another-string/
 */

function checkIfCanBreak(s1: string, s2: string): boolean {
  const sortedS1 = [...s1].sort();
  const sortedS2 = [...s2].sort();

  let countCanBreak = 0;

  for (let index = 0; index < sortedS1.length; index++) {
    if (sortedS1[index] >= sortedS2[index]) {
      countCanBreak++;
    }
  }

  if (countCanBreak < sortedS1.length) {
    countCanBreak = 0;

    for (let index = 0; index < sortedS1.length; index++) {
      if (sortedS2[index] >= sortedS1[index]) {
        countCanBreak++;
      }
    }
  }

  return countCanBreak === sortedS1.length;
}

console.log(checkIfCanBreak("leetcodee", "interview"));
