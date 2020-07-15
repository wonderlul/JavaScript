function updateCell(neighbours, value, row, column, updatedGrid) {
  let cellIndex;
  if (value === 0 && neighbours === 3) {
    cellIndex = updatedGrid.findIndex(
      (cell) => cell.row === row && cell.column === column
    );
    updatedGrid[cellIndex].value = 1; //revived
  } else if (value === 1) {
    switch (true) {
      case neighbours < 2:
        cellIndex = updatedGrid.findIndex(
          (cell) => cell.row === row && cell.column === column
        );
        updatedGrid[cellIndex].value = 0;
        break; //dies of lonelines

      case neighbours > 3:
        cellIndex = updatedGrid.findIndex(
          (cell) => cell.row === row && cell.column === column
        );
        updatedGrid[cellIndex].value = 0; //dies of overcrowding
        break;
    }
  }
  return updatedGrid;
}

module.exports = updateCell;
