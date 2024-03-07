/*
 * Problem: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 * */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let result = -Infinity;

function maxSum(root: TreeNode | null) {
  if (root === null) return 0;

  let leftSum = Math.max(maxSum(root.left), 0);
  let rightSum = Math.max(maxSum(root.right), 0);

  const total = root.val + Math.max(leftSum, rightSum);

  result = Math.max(result, root.val + leftSum + rightSum);

  return total;
}

function maxPathSum(root: TreeNode | null): number {
  result = -Infinity;

  maxSum(root);

  return result;
}
