class Game {
  constructor(board, vector, positionChecker, update) {
    this.board = board;
    this.update = update;
    this.vector = vector;
    this.positionChecker = positionChecker;
    this.counter = 0;
    this.finishTrigger = false;
  }

  play() {
    this.update.setStartingPosition(this.board, { row: 1, column: 1 });

    this.board.bounceBoard.map((row, index) => {
      if (row.findIndex((element) => element === "Ball") !== -1) {
        this.board.ballPosition = {
          row: index,
          column: row.findIndex((element) => element === "Ball"),
        };
      }
    });

    while (!this.finishTrigger) {
      this.positionChecker.obstacleCheck(this.board, this.vector);
      this.vector.setVector(this.board, this.positionChecker);

      if (this.vector.directionChange) {
        this.positionChecker.moveAfter(this.board, this.vector);
      }

      this.update.updateBoard(this.board, this.vector, this.positionChecker);

      if (this.counter > 0) {
        this.counter++;
        this.positionChecker.check(this.board, this.counter);
        if (this.positionChecker.isStartingPosition) {
          this.finishTrigger = true;
          console.log(
            `Ball has returned to its starting position, which is {row: ${this.board.startingPosition.row}, column: ${this.board.startingPosition.column}} in ${this.counter} moves`
          );
        } else if (this.positionChecker.isHundred) {
          this.finishTrigger = true;
          console.log(
            `Ball moved ${this.counter} times and never returned to starting position, which is {row: ${this.board.startingPosition.row}, column: ${this.board.startingPosition.column}} and is now at {row: ${this.board.ballPosition.row}, column: ${this.board.ballPosition.column}}.`
          );
        }
      } else {
        this.counter++;
      }
    }
  }
}

module.exports = Game;
