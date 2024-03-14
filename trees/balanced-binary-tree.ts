/*
 * Problem: https://leetcode.com/problems/balanced-binary-tree
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

let result = true;

function count(root: TreeNode | null) {
  if (root === null) return -1;

  const countLeft = count(root.left);
  const countRight = count(root.right);

  const difference = countLeft - countRight;

  if (Math.abs(difference) > 1) {
    result = false;
  }

  return 1 + Math.max(countLeft, countRight);
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;

  result = true;

  count(root);

  return result;
}
