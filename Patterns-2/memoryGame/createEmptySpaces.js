const createEmptySpaces = (board) => {
  let emptySpaces = [];
  for (let i = 0; i <= board.length - 1; i++) {
    for (let k = 0; k <= board[0].length - 1; k++) {
      emptySpaces.push({ row: i, column: k });
    }
  }
  return emptySpaces;
};

module.exports = createEmptySpaces;
