/*
 * Problem: https://leetcode.com/problems/binary-tree-right-side-view/description
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

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return [];
  const queue: TreeNode[] = [root];
  const result = [root.val];

  while (queue.length) {
    const size = queue.length;

    for (let index = 0; index < size; index++) {
      const current = queue.shift()!;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    if (queue[queue.length - 1]) result.push(queue[queue.length - 1].val);
  }

  return result;
}
