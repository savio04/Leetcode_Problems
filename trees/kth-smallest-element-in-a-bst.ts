/*
 * Problem: https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
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

function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) return -1;

  const stack: TreeNode[] = [root];
  const resultValue: number[] = [];

  while (stack.length > 0) {
    const curr = stack.pop()!;

    resultValue.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  resultValue.sort((a, b) => a - b);

  return resultValue[k - 1];
}

//Another solution
function kthSmallestTwo(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let count = 0;
  let curr = root;

  while (curr !== null || stack.length > 0) {
    while (curr) {
      stack.push(curr);

      curr = curr.left;
    }

    curr = stack.pop()!;
    count++;

    if (count === k) return curr.val;

    curr = curr.right;
  }

  return -1;
}
