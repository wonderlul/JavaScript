function neighboursUpdate(row, column, grid) {
  let neighbours = 0;
  for (let tempRow = row - 1; tempRow <= row + 1; tempRow++) {
    for (let tempColumn = column - 1; tempColumn <= column + 1; tempColumn++)
      if (tempColumn !== column || tempRow !== row) {
        let neighbourIndex = grid.findIndex(
          (cell) => cell.row === tempRow && cell.column === tempColumn
        );
        if (neighbourIndex !== -1) {
          let neighbourValue = grid[neighbourIndex].value;
          neighbours += neighbourValue;
        }
      }
  }
  return neighbours;
}

module.exports = neighboursUpdate;
