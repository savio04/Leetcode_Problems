/*
 * Problem: https://leetcode.com/problems/evaluate-reverse-polish-notation
 * */
function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  const operations = new Map([
    ["+", (num1: number, num2: number) => num1 + num2],
    ["-", (num1: number, num2: number) => num1 - num2],
    ["*", (num1: number, num2: number) => num1 * num2],
    ["/", (num1: number, num2: number) => Math.trunc(num1 / (num2 || 1))],
  ]);
  let result = "";

  for (let str of tokens) {
    result = str;

    if (operations.has(str)) {
      const num2 = Number(stack.pop());
      const num1 = Number(stack.pop());

      const calc = operations.get(str)!;
      const resultCalc = calc(num1, num2);

      result = String(resultCalc);
    }

    stack.push(result);
  }

  return Number(result);
}
