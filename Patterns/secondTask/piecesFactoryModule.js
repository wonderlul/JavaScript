const Rook = require("./rookModule");
const King = require("./kingModule");
const Knight = require("./knightModule");
const Bishop = require("./bishopModule");
const Queen = require("./queenModule");

const piecesFactory = (function () {
  return {
    createPiece: (characteristic) => {
      switch (characteristic.type) {
        case "Rook":
          return new Rook(characteristic);
        case "King":
          return new King(characteristic);
        case "Knight":
          return new Knight(characteristic);
        case "Bishop":
          return new Bishop(characteristic);
        case "Queen":
          return new Queen(characteristic);
      }
    },
  };
})();

module.exports = piecesFactory;
