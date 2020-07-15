const getGrid = (dimension) => {
  let grid = [];
  for (let i = 1; i <= dimension; i++) {
    for (let k = 1; k <= dimension; k++) {
      grid.push({ value: 0, row: i, column: k });
    }
  }
  return grid;
};

module.exports = getGrid;
