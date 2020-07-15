const actions = (function () {
  let instance;
  function init() {
    return new Actions();
  }

  class Actions {
    constructor() {
      this.blindTrigger = false;
      this.memoryTrigger = false;
      this.luckyTrigger = false;
      this.firstCheck;
      this.secondCheck;
      this.revealedSpots = [];
      this.clearedSpots = [];
      this.clearedTypes = [];
      this.bonus;
      this.firstRandomPick;
      this.secondRandomPick;
    }

    check(board, { revealedCards, revealedTypes, unrevealedSpots }) {
      this.blindTrigger = false;
      this.memoryTrigger = false;
      this.luckyTrigger = false;
      this.bonus = false;
      this.clearedSpots = [];
      this.revealedSpots = [];

      let findPair = revealedTypes.filter(
        (type, index) => revealedTypes.indexOf(type) !== index
      );

      if (findPair.length > 0) {
        let pair = revealedCards.filter((card) => card.type === findPair[0]);
        this.firstCheck = pair[0];
        this.secondCheck = pair[1];
        this.blindTrigger = true;
        this.bonus = true;
        this.clearedSpots.push(
          { row: pair[0].row, column: pair[0].column },
          { row: pair[1].row, column: pair[1].column }
        );
        this.clearedTypes.push(pair[0].type);
      } else {
        this.firstRandomPick =
          unrevealedSpots[Math.floor(Math.random() * unrevealedSpots.length)];

        this.revealedSpots.push(this.firstRandomPick);

        this.firstCheck = {
          type: board[this.firstRandomPick.row][this.firstRandomPick.column],
          row: this.firstRandomPick.row,
          column: this.firstRandomPick.column,
        };

        if (revealedTypes.indexOf(this.firstCheck.type) !== -1) {
          this.secondCheck = revealedCards.find(
            (card) => card.type === this.firstCheck.type
          );

          this.memoryTrigger = true;
          this.bonus = true;
          this.clearedSpots.push(
            { row: this.firstCheck.row, column: this.firstCheck.column },
            { row: this.secondCheck.row, column: this.secondCheck.column }
          );
          this.clearedTypes.push(this.firstCheck.type);
        } else {
          this.secondRandomPick =
            unrevealedSpots[Math.floor(Math.random() * unrevealedSpots.length)];
          while (this.secondRandomPick === this.firstRandomPick) {
            this.secondRandomPick =
              unrevealedSpots[
                Math.floor(Math.random() * unrevealedSpots.length)
              ];
          }

          this.revealedSpots.push(this.secondRandomPick);

          this.secondCheck = {
            type:
              board[this.secondRandomPick.row][this.secondRandomPick.column],
            row: this.secondRandomPick.row,
            column: this.secondRandomPick.column,
          };

          if (this.firstCheck.type === this.secondCheck.type) {
            this.luckyTrigger = true;
            this.bonus = true;
            this.clearedSpots.push(
              { row: this.firstCheck.row, column: this.firstCheck.column },
              { row: this.secondCheck.row, column: this.secondCheck.column }
            );
            this.clearedTypes.push(this.firstCheck.type);
          }
        }
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

module.exports = actions;
