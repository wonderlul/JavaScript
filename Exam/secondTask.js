let myColours = ["Spades", "Hearts", "Diamonds", "Club"];
let myRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

//Deklaracja figur oraz kolorów

function Card(rank, colour) {
  this.rank = rank;
  this.colour = colour;
}

//Tworzenie nowego konstruktora, który zwróci obiekt (kartę) posiadający dwa pola - firuę i kolor

let myCards = [];

for (let i = 0; i < myRanks.length; i++) {
  for (let j = 0; j < myColours.length; j++) {
    myCards.push(new Card(myRanks[i], myColours[j]));
  }
}

//Stworzenie talii myCards posiadającej 52 kart

let myHand = [];

for (let i = 0; i < 5; i++) {
  let drawnCard = myCards[Math.floor(Math.random() * myCards.length)];
  let indexToRemove = myCards.indexOf(drawnCard);
  myHand.push(drawnCard);
  myCards.splice(indexToRemove, 1);
}

//Pobranie "do ręki" pięciu losowych kart z talii

let ranksOnMyHand = myHand.map(card => {
  let rank = Object.values(card);
  return rank[0];
});

let coloursOnMyHand = myHand.map(card => {
  let rank = Object.values(card);
  return rank[1];
});

//"Rozdzielenie" obiektu (karty) na dwie składowe - figurę i kolor

let myBest = function(myHand, ranksOnMyHand, coloursOnMyHand) {
  console.log(ranksOnMyHand);
  console.log(coloursOnMyHand);

  let numericalRanksOnMyHand = [];

  for (let i = 0; i < ranksOnMyHand.length; i++) {
    switch (true) {
      case ranksOnMyHand[i] === "Jack":
        numericalRanksOnMyHand.push(11);
        break;
      case ranksOnMyHand[i] === "Queen":
        numericalRanksOnMyHand.push(12);
        break;
      case ranksOnMyHand[i] === "King":
        numericalRanksOnMyHand.push(13);
        break;
      case ranksOnMyHand[i] === "Ace":
        numericalRanksOnMyHand.push(14);
        break;
      case !!ranksOnMyHand[i]:
        numericalRanksOnMyHand.push(ranksOnMyHand[i]);
        break;
    }
  }

  let myRanks = [...new Set(numericalRanksOnMyHand.map(card => card))];
  let myColours = [...new Set(myHand.map(card => card.colour))];
  let myRanksSorted = numericalRanksOnMyHand.sort((a, b) => a - b);

  switch (true) {
    case myRanks[0] === 10 && myRanks[4] === 14 && myColours.length < 2:
      console.log("Poker"); //Poker
      break;
    case myRanksSorted[0] + 4 === myRanksSorted[1] + 3 &&
      myRanksSorted[1] + 3 === myRanksSorted[2] + 2 &&
      myRanksSorted[2] + 2 === myRanksSorted[3] + 1 &&
      myRanksSorted[3] + 1 === myRanksSorted[4] &&
      myColours.length < 2:
      console.log("Straight Flush"); //Straight Flush
      break;
    case myRanks.length < 3 &&
      (myRanksSorted[0] !== myRanksSorted[1] ||
        myRanksSorted[3] !== myRanksSorted[4]):
      console.log("Four of a kind"); //Four of a kind
      break;
    case myRanks.length < 3:
      console.log("Full house"); //Full house
      break;
    case myColours.length < 2:
      console.log("Flush"); //Flush
      break;
    case myRanksSorted[0] + 4 === myRanksSorted[1] + 3 &&
      myRanksSorted[1] + 3 === myRanksSorted[2] + 2 &&
      myRanksSorted[2] + 2 === myRanksSorted[3] + 1 &&
      myRanksSorted[3] + 1 === myRanksSorted[4]:
      console.log("Straight"); // Straight
      break;
    case myRanks.length < 4 &&
      (myRanksSorted[0] === myRanksSorted[2] ||
        myRanksSorted[1] === myRanksSorted[3] ||
        myRanksSorted[2] === myRanksSorted[4]):
      console.log("Three of a kind"); //Three of a kind
      break;
    case myRanks.length < 4:
      console.log("Two pairs"); // Two pairs
      break;
    case myRanks.length < 5:
      console.log("One pair"); //One pair
      break;
    case myRanks.length === 5:
      console.log("High card"); //High card
      break;
  }
};

myBest(myHand, ranksOnMyHand, coloursOnMyHand);
