class Game {
  constructor(board, figuresBox, collisionChecker) {
    this.figures = ["Queen", "King", "Bishop", "Knight", "Rook"];
    this.board = board;
    this.collisionChecker = collisionChecker;
    this.figuresBox = figuresBox;
    this.piecesOnBoard = [];
  }

  play() {
    let finishTrigger = false;
    let firstFigureCheck = 0;

    while (!finishTrigger) {
      const piece = this.figuresBox.createPiece({
        type: this.figures[Math.floor(Math.random() * this.figures.length)],
        square: {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 7),
        },
      });
      if (!this.board.chessBoard[piece.square.x][piece.square.y]) {
        piece.setEndangeredPosition();
        this.board.chessBoard[piece.square.x][piece.square.y] = piece.type;
        this.piecesOnBoard.push(piece);
      }
      if (firstFigureCheck) {
        this.collisionChecker.check(this.board.chessBoard, this.piecesOnBoard);
        finishTrigger = this.collisionChecker.trigger;
        if (this.collisionChecker.collisions[0]) {
          this.collisionChecker.collisions.forEach((collision) =>
            console.log(collision)
          );
        }
      } else {
        ++firstFigureCheck;
      }
    }
  }
}

module.exports = Game;
