/*
 * Problem: https://leetcode.com/problems/search-a-2d-matrix/
 * */
function searchMatrix(matrix: number[][], target: number): boolean {
  let firstLeft = 0
  let firstRight = matrix.length - 1

  while(firstLeft <= firstRight) {
    const firstMiddle = Math.trunc((firstLeft + firstRight) / 2)

    let secondLeft = 0
    let secondRigth = matrix[firstMiddle].length - 1

    while(secondLeft < secondRigth) {
      const secondMiddle = Math.trunc((secondLeft + secondRigth)/2)

      if(matrix[firstMiddle][secondMiddle] === target) return true

      if(matrix[firstMiddle][secondMiddle] < target) secondLeft = secondMiddle + 1

      if(matrix[firstMiddle][secondMiddle] > target) secondRigth = secondMiddle - 1
    }

    if(matrix[firstMiddle][secondLeft] === target) return true

    if(matrix[firstMiddle][secondLeft] < target) firstLeft = firstMiddle + 1

    if(matrix[firstMiddle][secondLeft] > target) firstRight = firstMiddle - 1
  }


  return false
};
