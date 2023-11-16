/**
 * Problem: https://leetcode.com/problems/valid-palindrome
 */

function isPalindrome(s: string): boolean {
  const regex = new RegExp("[^0-9a-z]", "gi");
  const cleanString = s.replace(regex, "").toLowerCase()

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] === cleanString[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
