const createAction = (function () {
  let instance;
  function init() {
    return new Action();
  }

  class Action {
    constructor() {}
    digHere(boardPosition, coordinates) {
      if (
        boardPosition.x === coordinates.x &&
        boardPosition.y === coordinates.y
      ) {
        return true;
      } else return false;
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

module.exports = createAction;
