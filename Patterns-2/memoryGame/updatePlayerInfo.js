const updatePlayerInfo = (
  spotsClearedLastRound,
  typesCollectedLastRound,
  { unrevealedSpots, revealedTypes }
) => {
  spotsClearedLastRound.map((spot) => {
    let spotToRemove = unrevealedSpots.findIndex(
      (unrevealedSpot) =>
        unrevealedSpot.row === spot.row && unrevealedSpot.column === spot.column
    );
    if (spotToRemove !== -1) {
      unrevealedSpots.splice(spotToRemove, 1);
    }
  });

  typesCollectedLastRound.map((type) => {
    for (let i = 0; i <= 1; i++) {
      let spotToRemove = revealedTypes.findIndex(
        (revealedType) => revealedType === type
      );
      if (spotToRemove !== -1) {
        revealedTypes.splice(spotToRemove, 1);
      }
    }
  });
};

module.exports = updatePlayerInfo;
