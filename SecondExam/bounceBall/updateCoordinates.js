const updateCoordinates = (
  previousCoordinates,
  currentCoordinates,
  newCoordinates
) => {
  let directionChange;
  previousCoordinates = currentCoordinates;
  currentCoordinates = newCoordinates;

  previousCoordinates.row !== currentCoordinates.row ||
  previousCoordinates.column !== currentCoordinates.column
    ? (directionChange = true)
    : (directionChange = false);
  return {
    previousCoordinates,
    currentCoordinates,
    directionChange,
  };
};

module.exports = updateCoordinates;
