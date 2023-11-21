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

function isValidBST(root: TreeNode | null): boolean {
  const stack: Array<{
    node: TreeNode | null;
    origin: "left" | "right" | null;
  }> = root ? [{ node: root, origin: null }] : [];

  let lastMin = 0; 
  let lastMax = 0;

  while (stack.length) {
    const { node, origin } = stack.pop()!;

    if (origin === "left") {
      if (node?.val! >= lastMin) {
        return false;
      } else {
        lastMin = node?.val!;
      }
    }

    if (origin === "right") {
      if (node?.val! <= lastMax) {
        return false;
      } else {
        lastMax = node?.val!;
      }
    }

    if (origin === null) {
      lastMin = node?.val!;
      lastMax = node?.val!;
    }

    if (!node?.left || node?.right) return false;

    stack.push({
      node: node?.right || null,
      origin: "right",
    });

    stack.push({
      node: node?.left || null,
      origin: "left",
    });
  }

  return true;
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
