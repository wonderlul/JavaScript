const createMovement = (function () {
  let instance;
  function init() {
    return new Move();
  }

  class Move {
    constructor() {}
    moveExact(boardPosition) {
      return { x: boardPosition.x, y: boardPosition.y };
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

module.exports = createMovement;
