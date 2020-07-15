const createBoard = (function () {
  let instance;
  function init() {
    return new Board();
  }

  class Board {
    constructor() {
      this.treasureMap = [
        [
          { x: 3, y: 4 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
          { x: 4, y: 1 },
          { x: 2, y: 5 },
        ],
        [
          { x: 1, y: 4 },
          { x: 4, y: 2 },
          { x: 4, y: 3 },
          { x: 1, y: 4 },
          { x: 3, y: 1 },
        ],
        [
          { x: 5, y: 4 },
          { x: 4, y: 5 },
          { x: 5, y: 2 },
          { x: 4, y: 2 },
          { x: 2, y: 3 },
        ],
        [
          { x: 3, y: 3 },
          { x: 1, y: 5 },
          { x: 5, y: 1 },
          { x: 3, y: 1 },
          { x: 3, y: 5 },
        ],
        [
          { x: 2, y: 1 },
          { x: 5, y: 2 },
          { x: 3, y: 3 },
          { x: 1, y: 3 },
          { x: 2, y: 3 },
        ],
      ];
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

module.exports = createBoard;
