/*
 *Problem: https://leetcode.com/problems/valid-sudoku/description
 * */

function isValidSudoku(board: string[][]): boolean {
  const hashRow = new Map();
  const hashCol = new Map();
  const hashSubBox = new Map();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const value = board[row][col];

      if (hashRow.has(row)) {
        const current = hashRow.get(row);

        if (value !== "." && current.includes(value)) return false;

        hashRow.set(row, [...current, value]);
      } else {
        hashRow.set(row, [value]);
      }

      if (hashCol.has(col)) {
        const current = hashCol.get(col);

        if (value !== "." && current.includes(value)) return false;

        hashCol.set(col, [...current, value]);
      } else {
        hashCol.set(col, [value]);
      }

      const rowSubBox = Math.floor(row / 3);
      const colSubBox = Math.floor(col / 3);

      const keySubBox = `${rowSubBox}-${colSubBox}`;

      if (hashSubBox.has(keySubBox)) {
        const current = hashSubBox.get(keySubBox);

        if (value !== "." && current.includes(value)) return false;

        hashSubBox.set(keySubBox, [...current, value]);
      } else {
        hashSubBox.set(keySubBox, [value]);
      }
    }
  }

  return true;
}
