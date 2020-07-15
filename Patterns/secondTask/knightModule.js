class Knight {
  constructor(characteristic) {
    this.type = characteristic.type;
    this.square = characteristic.square;
    this.endangeredPosition = [];
  }
  setEndangeredPosition() {
    const { x, y } = this.square;
    let possibleEndangeredPosition = [];

    possibleEndangeredPosition.push(
      { x: x - 2, y: y - 1 },
      { x: x - 2, y: y + 1 },
      { x: x - 1, y: y - 2 },
      { x: x - 1, y: y + 2 },
      { x: x + 1, y: y - 2 },
      { x: x + 1, y: y + 2 },
      { x: x + 2, y: y - 1 },
      { x: x + 2, y: y + 1 }
    );

    possibleEndangeredPosition
      .filter(
        (position) =>
          position.x >= 0 &&
          position.y >= 0 &&
          position.x <= 7 &&
          position.y <= 7
      )
      .map((position) => this.endangeredPosition.push(position));
  }
}

module.exports = Knight;
