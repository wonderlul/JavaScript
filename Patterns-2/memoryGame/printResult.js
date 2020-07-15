const printResult = (players) => {
  switch (players.length) {
    case 2:
      console.log(
        `Game Finished. Player One collected ${players[0].collectedPairs} pairs and Player Two collected ${players[1].collectedPairs} pairs`
      );
      break;
    case 3:
      console.log(
        `Game Finished. Player One collected ${players[0].collectedPairs} pairs, Player Two collected ${players[1].collectedPairs} pairs and Player Three collected ${players[2].collectedPairs} pairs `
      );
      break;
    case 4:
      console.log(
        `Game Finished. Player One collected ${players[0].collectedPairs} pairs, Player Two collected ${players[1].collectedPairs} pairs, Player Three collected ${players[2].collectedPairs} pairs and Player Four collected ${players[3].collectedPairs} pairs `
      );
      break;
  }
};

module.exports = printResult;
