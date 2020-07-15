const createAdventure = (function () {
  let instance;
  function init(board, action, movement) {
    return new Adventure(board, action, movement);
  }

  class Adventure {
    constructor(board, action, movement) {
      this.action = action;
      this.movement = movement;
      this.board = board;
    }

    begin() {
      let boardPosition = { x: 1, y: 1 };
      let isFound = false;

      while (!isFound) {
        let coordinates = {
          x: this.board.treasureMap[boardPosition.x - 1][boardPosition.y - 1].x,
          y: this.board.treasureMap[boardPosition.x - 1][boardPosition.y - 1].y,
        };
        isFound = this.action.digHere(boardPosition, coordinates);
        if (isFound) {
          console.log(
            `Wohoo! You found a treasure at ${boardPosition.x}x${boardPosition.y}.`
          );
        } else {
          boardPosition = this.movement.moveExact(coordinates);
        }
      }
    }
  }

  return {
    getInstance: function (board, action, movement) {
      if (!instance) {
        instance = init(board, action, movement);
      }

      return instance;
    },
  };
})();

module.exports = createAdventure;
