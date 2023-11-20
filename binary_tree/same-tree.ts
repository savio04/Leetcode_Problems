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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let result = true;

  const stack: (TreeNode | null | undefined)[][] = p || q ? [[p, q]] : [];

  while (stack.length) {
    const [currentNodeP, currentNodeQ] = stack.pop()!;

    if (currentNodeP?.val !== currentNodeQ?.val) result = false;

    if (currentNodeP?.right || currentNodeQ?.right)
      stack.push([currentNodeP?.right, currentNodeQ?.right]);
    if (currentNodeP?.left || currentNodeQ?.left)
      stack.push([currentNodeP?.left, currentNodeQ?.left]);
  }

  return result;
}

const oneP = new TreeNode(1);
const twoP = new TreeNode(2);

oneP.left = twoP;

const oneQ = new TreeNode(1);
const twoQ = new TreeNode(2);

oneQ.right = twoQ;

console.log(isSameTree(oneP, oneQ));
