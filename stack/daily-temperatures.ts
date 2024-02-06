/*
 * Problem: https://leetcode.com/problems/daily-temperatures/
 * */
function dailyTemperatures(temperatures: number[]): number[] {
  const answer = new Array(temperatures.length).fill(0);
  const stack: Array<{ value: number; index: number }> = [];

  for (let index = 0; index < temperatures.length; index++) {
    while (temperatures[index] > stack[stack.length - 1]?.value) {
      const popItem = stack.pop()!;

      answer[popItem.index] = index - popItem.index;
    }

    stack.push({ value: temperatures[index], index });
  }

  return answer;
}
