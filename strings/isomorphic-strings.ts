/**
 * Problem: https://leetcode.com/problems/isomorphic-strings/description/
 */

function isIsomorphic(s: string, t: string): boolean {
  const hashTable: {
    [key: string]: { letter: string; count: number };
  } = {};
  const mappedLetters: { [key: string]: boolean } = {};

  let totalLetters = 0;

  for (const [index, letter] of s.split("").entries()) {
    const current = hashTable[letter];

    if (current) {
      if (current.letter === t[index]) {
        hashTable[letter].count += 1;

        totalLetters += 1;
      }
    } else {
      if (!mappedLetters[t[index]]) {
        hashTable[letter] = { letter: t[index], count: 1 };
        mappedLetters[t[index]] = true;
        totalLetters += 1;
      }
    }
  }

  return totalLetters === s.length;
}


console.log(isIsomorphic("egg", "add"));
