class Rook {
  constructor(characteristic) {
    this.type = characteristic.type;
    this.square = characteristic.square;
    this.endangeredPosition = [];
  }
  setEndangeredPosition() {
    const { x, y } = this.square;

    for (let i = 0; i <= 7; i++) {
      if (i !== y) {
        this.endangeredPosition.push({ x: x, y: i });
      }
    }
    for (let k = 0; k <= 7; k++) {
      if (k !== x) {
        this.endangeredPosition.push({ x: k, y: y });
      }
    }
  }
}

module.exports = Rook;
