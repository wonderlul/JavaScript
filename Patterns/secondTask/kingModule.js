class King {
  constructor(characteristic) {
    this.type = characteristic.type;
    this.square = characteristic.square;
    this.endangeredPosition = [];
  }
  setEndangeredPosition() {
    const { x, y } = this.square;
    for (let verticalAlign = y - 1; verticalAlign <= y + 1; verticalAlign++) {
      for (
        let horizontalAlign = x - 1;
        horizontalAlign <= x + 1;
        horizontalAlign++
      )
        if (
          (horizontalAlign !== x || verticalAlign !== y) &&
          horizontalAlign >= 0 &&
          verticalAlign >= 0
        ) {
          this.endangeredPosition.push({
            x: horizontalAlign,
            y: verticalAlign,
          });
        }
    }
  }
}
module.exports = King;
