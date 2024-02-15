/*
 * Problem: https://leetcode.com/problems/car-fleet/description/
 * */

function carFleet(target: number, position: number[], speed: number[]): number {
  const hashMap = new Map();
  const stack: number[] = [];

  for (let index = 0; index < position.length; index++) {
    hashMap.set(position[index], speed[index]);
  }

  const sortedKeys = Array.from(hashMap.keys()).sort((a, b) => b - a);

  for (const key of sortedKeys) {
    stack.push((target - key) / hashMap.get(key));

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
}
