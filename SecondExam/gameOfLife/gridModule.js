const getGrid = require("./getGrid");

const createGrid = (function () {
  let instance;
  function init() {
    return new Grid();
  }

  class Grid {
    constructor() {
      this.grid;
    }

    getRandomGrid(dimension) {
      this.grid = getGrid(dimension);
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
})();

module.exports = createGrid;
