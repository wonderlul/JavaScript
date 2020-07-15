function setCells(grid, quantity) {
  let alreadyPicked = {};

  for (let counter = 1; counter <= quantity; ) {
    let randomCell = [Math.floor(Math.random() * grid.length)];

    if (!alreadyPicked[randomCell]) {
      grid[randomCell].value = 1;
      counter++;
    }
    alreadyPicked[randomCell] = true;
  }
}

module.exports = setCells;
