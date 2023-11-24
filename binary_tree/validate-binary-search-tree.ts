/**
 * Problem: https://leetcode.com/problems/validate-binary-search-tree/
 */
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

function isValidBSTByMinMaxValue(
  root: TreeNode | null,
  minValue: number,
  maxValue: number
): boolean {
  if (root === null) return true;

  if (root.val <= minValue || root.val >= maxValue) return false;

  return (
    isValidBSTByMinMaxValue(root.left, minValue, root.val) &&
    isValidBSTByMinMaxValue(root.right, root.val, maxValue)
  );
}

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) return true;

  return isValidBSTByMinMaxValue(root, Infinity * -1, Infinity);
}

const five = new TreeNode(5);
const four = new TreeNode(4);
const six = new TreeNode(6);
const three = new TreeNode(3);
const seven = new TreeNode(7);

five.left = four;
five.right = six;

six.left = three;
six.right = seven;

console.log(isValidBST(five));
