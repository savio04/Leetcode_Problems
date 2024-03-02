/*
 * Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/description
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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const queue: TreeNode[] = [root];
  let count = 0;

  while (queue.length) {
    const size = queue.length;
    count += 1;

    for (let index = 0; index < size; index++) {
      const first = queue.shift()!;

      if (first.left) {
        queue.push(first.left);
      }

      if (first.right) {
        queue.push(first.right);
      }
    }
  }

  return count;
}
