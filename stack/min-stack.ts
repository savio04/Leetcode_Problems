/*
 * Problem: https://leetcode.com/problems/min-stack
 * */
class MinStack {
  stack: number[];
  min: number;

  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push(val: number): void {
    this.min = Math.min(this.min, val);
    this.stack.unshift(val);
  }

  pop(): void {
    const min = this.stack.shift();

    if (min === this.min) {
      this.min = Infinity;

      for (let index = 0; index < this.stack.length; index++) {
        this.min = Math.min(this.min, this.stack[index]);
      }
    }
  }

  top(): number {
    return this.stack[0];
  }

  getMin(): number {
    return this.min;
  }
}
