function twoSum(nums: number[], target: number): number[] {
  const mappedNums = new Map();

  for (const [index, num] of nums.entries()) {
    const diff = target - num;

    if (mappedNums.has(diff)) {
      return [index, mappedNums.get(diff)];
    } else {
      mappedNums.set(num, index);
    }
  }

  return [];
}
