function containsDuplicate(nums: number[]): boolean {
  const uniqueNumbers = new Set(nums)

  return nums.length !== uniqueNumbers.size
};