const createGrid = require("./gridModule");
const fillGrid = require("./setCells");
const updateGrid = require("./updateGrid");

let gridInstance = createGrid.getInstance();

gridInstance.getRandomGrid(5);
fillGrid(gridInstance.grid, 14);

while (true) {
  updateGrid(gridInstance.grid);
}
