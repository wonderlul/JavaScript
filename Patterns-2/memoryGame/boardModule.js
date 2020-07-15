const createEmptySpaces = require("./createEmptySpaces");

const createBoard = (function () {
  let instance;
  function init() {
    return new Board();
  }

  class Board {
    constructor() {
      this.memoryBoard = [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ];
      this.figures = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "=",
        "+",
        "-",
        "_",
      ];
    }

    getRandomBoard() {
      let emptySpaces = createEmptySpaces(this.memoryBoard);

      while (emptySpaces.length >= 1) {
        const card = this.figures[
          Math.floor(Math.random() * this.figures.length)
        ];
        this.figures.splice(this.figures.indexOf(card), 1);

        for (let i = 0; i <= 1; i++) {
          let pickedSpot =
            emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
          this.memoryBoard[pickedSpot.row][pickedSpot.column] = card;
          emptySpaces.splice(emptySpaces.indexOf(pickedSpot), 1);
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

module.exports = createBoard;
