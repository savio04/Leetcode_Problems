/*
 * Problem: https://leetcode.com/problems/subtree-of-another-tree
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

function isEqual(firstRoot: TreeNode | null, secondRoot: TreeNode | null) {
  if (firstRoot === null && secondRoot === null) return true;

  if (firstRoot === null || secondRoot === null) return false;

  const leftEqual = isEqual(firstRoot.left, secondRoot.left);
  const rightEqual = isEqual(firstRoot.right, secondRoot.right);

  return firstRoot.val === secondRoot.val && leftEqual && rightEqual;
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (subRoot === null) return true;

  if (root === null) return false;

  if (isEqual(root, subRoot)) return true;

  const left = isSubtree(root.left, subRoot);
  const right = isSubtree(root.right, subRoot);

  return left || right;
}
