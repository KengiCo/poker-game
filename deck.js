let suits = ["H", "D", "C", "S"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let mapped_Values = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
};

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.deck[newIndex];
      this.deck[newIndex] = this.deck[i];
      this.deck[i] = oldValue;
    }
    return this.deck;
  }

  deal() {
    let hand = this.deck.slice(this.deck.length - 5, this.deck.length);
    return hand;
  }
}
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();
let hand = deck.deal();

let handArray = [];
let handValue = [];
let handSuit = [];
for (let card of hand) {
  handArray.push(card.suit + card.value);
  handValue.push(card.value);
  handSuit.push(card.suit);
} 
console.log(handValue);

function checkPairs() {
//   var arr = ["A", "B", "C", "D", "E"];
  let countPairs = 0;
  for (i = 0; i < handValue.length; i++) {
    for (x = 0; x < handValue.length; x++) {
      if (handValue[i] == handValue[x] && i != x) {
        countPairs++; 
      }
    }
  }
// check how many times every value of the card is repeated(eg 2 for a pair or 6 for a tris)
  if (countPairs == 2) {
    return console.log("Pair");
  } else if (countPairs == 4) {
    return console.log("Two Pair");
  } else if (countPairs == 6) {
    return console.log("Three of a kind");
  } else if (countPairs == 8) {
    return console.log("Full Hose");
  } else if (countPairs == 12) {
    return console.log("Poker");
  } else {
    // i should check here for High Card, Straight, Flush, Straight Flush, Royal Flush
    let sortableValue = [];
    console.log(Object.values(mapped_Values));
    console.log(mapped_Values[handValue[0]]);
    for (hand of handValue) {
      sortableValue.push(mapped_Values[hand]);
    }
    sortableValue.sort((a, b) => a - b);
// check if all Suits are the same
    if (handSuit.every((val, i, arr) => val === arr[0])) {
// check if last value sorted is an Ace(value equals 14), as this is equal to a Royal Flush 
      if (
        sortableValue[4] == sortableValue[0] + sortableValue.length - 1 &&
        sortableValue[sortableValue.length - 1] == 14
      ) {
        return console.log("Royal Flush");
    } else if 
    // check if the last digit of the array sorted is equal to the first + the number of cards
    (
      sortableValue[sortableValue.length - 1] ==
      sortableValue[0] + sortableValue.length - 1
    ) {
      return console.log("Straight Flush");
    } else {
      return console.log("Flush");
    }
  }
// check for a plain straight
  if     (
    sortableValue[sortableValue.length - 1] ==
    sortableValue[0] + sortableValue.length - 1
  ){
    return console.log("Straight")
  }
 else {
     let highestCard = Object.keys(mapped_Values).find(key => mapped_Values[key] == sortableValue[sortableValue.length - 1])
     return console.log(`Highest card is ${highestCard}`)
 }
}}        
 
checkPairs();
