const createEmptySpaces = require("./createEmptySpaces");
const updatePlayerInfo = require("./updatePlayerInfo");
const printResult = require("./printResult");

class Game {
  constructor(board, players, actions) {
    this.board = board;
    this.players = players;
    this.actions = actions;

    this.notCollectedSpots;
    this.spotsClearedLastRound = [];
    this.typesCollectedLastRound = [];
    this.isFirstMove;
    this.bonus;
  }

  play() {
    this.board.getRandomBoard();
    this.board = this.board.memoryBoard;
    this.notCollectedSpots = createEmptySpaces(this.board);

    while (this.notCollectedSpots.length >= 2) {
      this.players.map((player) => {
        this.isFirstMove = true;
        this.bonus = false;

        updatePlayerInfo(
          this.spotsClearedLastRound,
          this.typesCollectedLastRound,
          player
        );

        this.spotsClearedLastRound = [];
        this.typesCollectedLastRound = [];

        while (
          this.notCollectedSpots.length >= 2 &&
          (this.isFirstMove || this.bonus)
        ) {
          this.actions.check(this.board, player);

          player.makeMove(this.actions);

          this.bonus = this.actions.bonus;
          this.isFirstMove = false;

          this.actions.clearedSpots.map((clearedSpot) => {
            let spotToRemove = this.notCollectedSpots.findIndex(
              (notCollectedSpot) =>
                notCollectedSpot.row === clearedSpot.row &&
                notCollectedSpot.column === clearedSpot.column
            );

            this.notCollectedSpots.splice(spotToRemove, 1);
            this.spotsClearedLastRound.push(clearedSpot);
          });

          this.actions.clearedTypes.map((clearedType) => {
            this.typesCollectedLastRound.push(clearedType);
          });
        }
      });
    }
    printResult(this.players);
  }
}

module.exports = Game;
