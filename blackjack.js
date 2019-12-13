//
// Blackjack
// by Hector Vega
//

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six', 
    'Five', 'Four', 'Three', 'Two']

function createDeck() {
    let deck = []

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx])
        }
    }
    return deck
}

function getNextCard() {
    return deck.shift();
}

let deck = createDeck()

function shuffleDeck(deck) {
    deck.sort(function(a, b) {return 0.5 - Math.random()})
}

shuffleDeck(deck)

for (let i = 0; i < deck.length; i++) {
    console.log(deck[i])
}

let playerCards = [ getNextCard(), getNextCard() ]
let crupierCards = [ getNextCard(), getNextCard()]

console.log("Welcome to Blackjack!")

console.log("You're dealt: ")
console.log(" " + playerCards[0])
console.log(" " + playerCards[1])