let suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
let values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]

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

console.log(deck.deal())