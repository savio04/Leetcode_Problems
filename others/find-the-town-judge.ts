/**
 * Problem: https://leetcode.com/problems/find-the-town-judge/
 */

function findJudge(n: number, trust: number[][]): number {
  if (trust.length === 0 && n === 1) return 1;

  const countMap = new Map();
  const visitors = new Set();

  for (let index = 0; index < trust.length; index++) {
    const visiteTrust = trust[index][0];
    const currentTrust = trust[index][1];

    if (countMap.has(currentTrust)) {
      const currentItem = countMap.get(currentTrust);

      countMap.set(currentTrust, currentItem + 1);
    } else {
      countMap.set(currentTrust, 1);
    }

    visitors.add(visiteTrust);
  }

  for (const [key, count] of countMap.entries()) {
    if (count === n - 1 && !visitors.has(key)) return key;
  }

  return -1;
}

console.log(
  findJudge(2, [
    [1, 2],
    [2, 1],
  ])
);
