/**
 * Problem: https://leetcode.com/problems/valid-parentheses/
 */

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const character of s) {
    stack.unshift(character);

    let removeFromStack = false;

    if (stack[0] === ")" && stack[1] === "(") removeFromStack = true;

    if (stack[0] === "]" && stack[1] === "[") removeFromStack = true;

    if (stack[0] === "}" && stack[1] === "{") removeFromStack = true;

    if (removeFromStack) stack.splice(0, 2);
  }

  return stack.length === 0;
}

console.log(isValid("()"));
