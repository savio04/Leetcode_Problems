/*
 * Problem: https://leetcode.com/problems/time-based-key-value-store/description/
 * */

class TimeMap {
  hashMap: Map<any, any>;

  constructor() {
    this.hashMap = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const curr = this.hashMap.get(key) || [];

    if (curr) {
      curr.push([value, timestamp]);

      this.hashMap.set(key, curr);
    } else {
      this.hashMap.set(key, [[value, timestamp]]);
    }
  }

  get(key: string, timestamp: number): string {
    const arr = this.hashMap.get(key);

    if (!arr) return "";

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const middle = Math.trunc((left + right) / 2);

      if (arr[middle][1] === timestamp) {
        return arr[middle][0];
      }

      if (timestamp > arr[middle][1]) left = middle + 1;

      if (timestamp < arr[middle][1]) right = middle - 1;
    }

    return arr[right] ? arr[right][0] : "";
  }
}
