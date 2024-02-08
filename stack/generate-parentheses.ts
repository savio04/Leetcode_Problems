/*
 *  Problem: https://leetcode.com/problems/generate-parentheses/description/
 *
 *  More to do with backtracking
 * */

function generateParenthesis(n: number): string[] {
  let result: string[] = [];
  let stack: string[] = [];

  function backtrack(open: number, close: number) {
    if (open === close && close === n) {
      result.push(stack.join(""));
      return result;
    }

    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return result;
}
