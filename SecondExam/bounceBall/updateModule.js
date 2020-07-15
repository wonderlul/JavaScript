class Update {
  constructor() {}
  setStartingPosition(board, coordinates) {
    board.bounceBoard[coordinates.row][coordinates.column] = "Ball";
    board.startingPosition = {
      row: coordinates.row,
      column: coordinates.column,
    };
  }
  updateBoard(
    { bounceBoard, ballPosition },
    { previousCoordinates, currentCoordinates, directionChange },
    { isY, isXorYagain }
  ) {
    if (isY) {
      bounceBoard[ballPosition.row + previousCoordinates.row][
        ballPosition.column + previousCoordinates.column
      ] = "0";
    }

    switch (true) {
      case isXorYagain:
        if (bounceBoard[ballPosition.row][ballPosition.column] === "Ball") {
          bounceBoard[ballPosition.row][ballPosition.column] = "0";
        }
        ballPosition.row = ballPosition.row + previousCoordinates.row;
        ballPosition.column = ballPosition.column + previousCoordinates.column;
        break;

      case !isXorYagain && directionChange:
        if (bounceBoard[ballPosition.row][ballPosition.column] === "Ball") {
          bounceBoard[ballPosition.row][ballPosition.column] = "0";
        }

        ballPosition.row =
          ballPosition.row + previousCoordinates.row + currentCoordinates.row;
        ballPosition.column =
          ballPosition.column +
          previousCoordinates.column +
          currentCoordinates.column;

        bounceBoard[ballPosition.row][ballPosition.column] = "Ball";
        break;

      case !isXorYagain && !directionChange:
        bounceBoard[ballPosition.row][ballPosition.column] = "0";

        ballPosition.row = ballPosition.row + currentCoordinates.row;
        ballPosition.column = ballPosition.column + currentCoordinates.column;

        bounceBoard[ballPosition.row][ballPosition.column] = "Ball";
        break;
    }
  }
}

module.exports = Update;
