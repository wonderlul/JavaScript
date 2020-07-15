const collisionChecker = (function () {
  let instance;
  function init() {
    return new CollisionChecker();
  }

  class CollisionChecker {
    constructor() {
      this.trigger = false;
      this.collisions = [];
    }
    check(board, pieces) {
      let collisionPosition = [];
      pieces.forEach((piece) => {
        collisionPosition = piece.endangeredPosition.filter(
          (position) => board[position.x][position.y]
        );

        if (collisionPosition[0]) {
          this.trigger = true;
          collisionPosition.map((collision) => {
            this.collisions.push(
              `${piece.type} takes ${
                board[collision.x][collision.y]
              } at position: ${collision.x}/${collision.y}`
            );
          });
        }
      });
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

module.exports = collisionChecker;
