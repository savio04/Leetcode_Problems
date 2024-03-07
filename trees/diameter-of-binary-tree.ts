/*
 * Problem: https://leetcode.com/problems/diameter-of-binary-tree/description/
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

function diameter(root: TreeNode | null) {
  if (root === null) return -1;

  const leftValues = diameter(root.left);
  const rigthValues = diameter(root.right);

  result = Math.max(result, leftValues + rigthValues + 2);

  return 1 + Math.max(leftValues, rigthValues);
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  result = -Infinity;

  diameter(root);

  return result;
}
