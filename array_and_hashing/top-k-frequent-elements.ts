function topKFrequent(nums: number[], k: number): number[] {
  const count = new Map<number, number>();

  for (const num of nums) {
    if (count.has(num)) {
      const current = count.get(num)!;

      count.set(num, current + 1);
    } else {
      count.set(num, 1);
    }
  }

  const countSorted = Array.from(
    new Map([...count].sort((a, b) => b[1] - a[1]))
  );
  const result: number[] = [];

  for (let index = 0; index < k; index++) {
    result.push(countSorted[index][0]);
  }

  return result;
}
