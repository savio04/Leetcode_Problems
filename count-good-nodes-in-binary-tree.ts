/*
 * Problem: https://leetcode.com/problems/count-good-nodes-in-binary-tree/description
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

let result = 0;

function countGoodNodes(root: TreeNode | null, max: number) {
  if (root === null) return null;

  if (max <= root.val) result++;

  countGoodNodes(root.left, Math.max(max, root.left?.val || 0));
  countGoodNodes(root.right, Math.max(max, root.right?.val || 0));
}

function goodNodes(root: TreeNode | null): number {
  result = 0;

  countGoodNodes(root, root?.val || 0);

  return result;
}
