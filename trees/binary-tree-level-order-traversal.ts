/*
 * Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/description/
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

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const queue: TreeNode[] = [root];
  const result: number[][] = [];
  let levelValues: number[] = [root.val];

  while (queue.length > 0) {
    const size = queue.length;

    result.push(levelValues);
    levelValues = [];

    for (let index = 0; index < size; index++) {
      const current = queue.shift()!;

      if (current.left) {
        queue.push(current.left);
        levelValues.push(current.left.val);
      }
      if (current.right) {
        queue.push(current.right);
        levelValues.push(current.right.val);
      }
    }
  }

  return result;
}
