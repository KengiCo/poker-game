let suits = ["H", "D", "C", "S"]
let values = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor(){
        this.deck = []
    }

    createDeck(suits, values){
        for(let suit of suits){
            for(let value of values){
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck;
    }
    shuffle(){
        for (let i = this.deck.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.deck[newIndex]
        this.deck[newIndex] = this.deck[i]
        this.deck[i] = oldValue
    }
    return this.deck;
    }
    
    deal(){
        let hand = this.deck.slice((this.deck.length - 5), this.deck.length)
        return hand
    }

}
let deck = new Deck()
deck.createDeck(suits, values)
deck.shuffle()
let hand = deck.deal()


let handArray = []
let handValue = []
let handSuit = []
for (let card of hand) {
    handArray.push(card.suit + card.value)
    handValue.push(card.value)
    handSuit.push(card.suit)
};
console.log(handValue)


function checkPairs(){
var arr = [ 'A', 'A', 'E', 'E', 'E' ]
let countPairs = 0
  for (i=0; i<arr.length;i++){
    for (x=0;x<arr.length;x++){
      if(arr[i]==arr[x] && i != x){
          countPairs++
      }else console.log('no same ones');
    }
  }
  if (countPairs == 2) {
      return console.log("Pair")
  }
  else if (countPairs == 4) {
      return console.log("Two Pair")
  }
  else if (countPairs == 6) {
      return console.log("Three of a kind")
  }
  else if (countPairs == 8) {
      return console.log("Full Hose")
  }
  else if (countPairs == 12) {
    return console.log("Poker")
    }
    else{
        // i should check here for High Card, Straight, Flush, Straight Flush, Royal Flush
    }
}
checkPairs()