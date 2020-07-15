const playerFactory = (function () {
  let counter = 0;

  class Player {
    constructor(id, board) {
      this.id = id;
      this.collectedPairs = 0;
      this.revealedCards = [];
      this.revealedTypes = [];
      this.unrevealedSpots = (function () {
        let unrevealedSpots = [];
        for (let i = 0; i <= board.memoryBoard.length - 1; i++) {
          for (let k = 0; k <= board.memoryBoard[0].length - 1; k++) {
            unrevealedSpots.push({ row: i, column: k });
          }
        }
        return unrevealedSpots;
      })();
    }

    makeMove({
      blindTrigger,
      memoryTrigger,
      luckyTrigger,
      firstCheck,
      secondCheck,
      revealedSpots,
    }) {
      switch (true) {
        case blindTrigger:
          this.collectedPairs++;
          this.revealedTypes
            .sort()
            .splice(this.revealedTypes.indexOf(firstCheck.type), 2);
          this.revealedCards.splice(this.revealedCards.indexOf(firstCheck), 1);
          this.revealedCards.splice(this.revealedCards.indexOf(secondCheck), 1);
          break;

        case memoryTrigger:
          this.collectedPairs++;

          this.revealedTypes.splice(
            this.revealedTypes.indexOf(firstCheck.type),
            1
          );

          this.revealedCards.splice(this.revealedCards.indexOf(secondCheck), 1);

          revealedSpots.map((revealedSpot) => {
            let spotToRemove = this.unrevealedSpots.findIndex(
              (spot) =>
                revealedSpot.row === spot.row &&
                revealedSpot.column === spot.column
            );

            if (spotToRemove !== -1) {
              this.unrevealedSpots.splice(spotToRemove, 1);
            }
          });
          break;

        case luckyTrigger:
          this.collectedPairs++;

          revealedSpots.map((revealedSpot) => {
            let spotToRemove = this.unrevealedSpots.findIndex(
              (spot) =>
                revealedSpot.row === spot.row &&
                revealedSpot.column === spot.column
            );

            if (spotToRemove !== -1) {
              this.unrevealedSpots.splice(spotToRemove, 1);
            }
          });
          break;

        case !blindTrigger && !memoryTrigger && !luckyTrigger:
          this.revealedCards.push(firstCheck);
          this.revealedTypes.push(firstCheck.type);
          this.revealedCards.push(secondCheck);
          this.revealedTypes.push(secondCheck.type);

          revealedSpots.map((revealedSpot) => {
            let spotToRemove = this.unrevealedSpots.findIndex(
              (spot) =>
                revealedSpot.row === spot.row &&
                revealedSpot.column === spot.column
            );

            if (spotToRemove !== -1) {
              this.unrevealedSpots.splice(spotToRemove, 1);
            }
          });
          break;
      }
    }
  }

  return {
    createPlayer: (board) => {
      if (counter >= 4) throw new Error("Maximum amount of players is four.");
      else {
        counter++;
        return new Player(counter, board);
      }
    },
  };
})();

module.exports = playerFactory;
