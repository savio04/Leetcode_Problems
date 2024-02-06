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
    this.stack.push(val);
  }

  pop(): void {
    const min = this.stack.pop();

    if (min === this.min) {
      this.min = Infinity;

      for (let index = 0; index < this.stack.length; index++) {
        this.min = Math.min(this.min, this.stack[index]);
      }
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}
