class Bishop {
  constructor(characteristic) {
    this.type = characteristic.type;
    this.square = characteristic.square;
    this.endangeredPosition = [];
  }
  setEndangeredPosition() {
    const { x, y } = this.square;

    for (let i = 1; i <= 7; i++) {
      let endangeredSquare = [
        { x: x - i, y: y - i },
        { x: x - i, y: y + i },
        { x: x + i, y: y - i },
        { x: x + i, y: y + i },
      ];
      endangeredSquare
        .filter(
          (square) =>
            square.x !== x &&
            square.y !== y &&
            square.x >= 0 &&
            square.y >= 0 &&
            square.x <= 7 &&
            square.y <= 7
        )
        .map((square) => this.endangeredPosition.push(square));
    }
  }
}

module.exports = Bishop;
