const createChecker = (function () {
  let instance;
  function init() {
    return new Checker();
  }

  class Checker {
    constructor() {
      this.isStartingPosition;
      this.isHundred;
      this.isY = false;
      this.isX = false;
      this.isXorYagain = false;
    }
    check({ startingPosition, ballPosition }, moves) {
      if (
        ballPosition.row === startingPosition.row &&
        ballPosition.column === startingPosition.column
      ) {
        this.isStartingPosition = true;
      } else if (moves === 100) {
        this.isHundred = true;
      }
    }
    obstacleCheck({ bounceBoard, ballPosition }, { currentCoordinates }) {
      this.isY = false;
      this.isX = false;

      switch (true) {
        case bounceBoard[ballPosition.row + currentCoordinates.row][
          ballPosition.column + currentCoordinates.column
        ] === "Y":
          this.isY = true;
          break;
        case bounceBoard[ballPosition.row + currentCoordinates.row][
          ballPosition.column + currentCoordinates.column
        ] === "X":
          this.isX = true;
      }
    }

    moveAfter(
      { bounceBoard, ballPosition },
      { previousCoordinates, currentCoordinates }
    ) {
      this.isXorYagain = false;

      if (
        bounceBoard[
          ballPosition.row + previousCoordinates.row + currentCoordinates.row
        ][
          ballPosition.column +
            previousCoordinates.column +
            currentCoordinates.column
        ] === "X" ||
        bounceBoard[
          ballPosition.row + previousCoordinates.row + currentCoordinates.row
        ][
          ballPosition.column +
            previousCoordinates.column +
            currentCoordinates.column
        ] === "Y"
      ) {
        this.isXorYagain = true;
      }
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

module.exports = createChecker;
