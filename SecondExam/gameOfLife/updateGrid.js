const updateNeighbours = require("./updateNeighbours");
const updateCell = require("./updateCell");

function updateGrid(grid) {
  let updatedGrid = JSON.parse(JSON.stringify(grid));

  grid.map((cell) => {
    let { value, row, column } = cell;

    const neighbours = updateNeighbours(row, column, grid);
    updatedGrid = updateCell(neighbours, value, row, column, updatedGrid);
  });
  grid = updatedGrid;
}
module.exports = updateGrid;
