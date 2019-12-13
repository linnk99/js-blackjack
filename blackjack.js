//
// Blackjack
// by Hector Vega
//

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six', 
    'Five', 'Four', 'Three', 'Two']

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button')
let hitButton = document.getElementById('hit-button')
let stayButton = document.getElementById('stay-button')

hitButton.style.display = 'none'
stayButton.style.display = 'none'

newGameButton.addEventListener('click', function() {
    textArea.innerText = 'Started...'
    newGameButton.style.display = 'none'
    hitButton.style.display = 'inline'
    stayButton.style.display = 'inline'
})

function createDeck() {
    let deck = []

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            }
            deck.push( card )
        }
    }
    return deck
}

function getNextCard() {
    return deck.shift();
}

function getCardString(card) {
    return card.value + ' of ' + card.suit
}

let deck = createDeck()

function shuffleDeck(deck) {
    deck.sort(function(a, b) {return 0.5 - Math.random()})
}

shuffleDeck(deck)

/* for (let i = 0; i < deck.length; i++) {
    console.log(deck[i])
} */

let playerCards = [ getNextCard(), getNextCard() ]
let crupierCards = [ getNextCard(), getNextCard()]

console.log("Welcome to Blackjack!")

console.log("You're dealt: ")
console.log(" " + getCardString(playerCards[0]))
console.log(" " + getCardString(playerCards[1]))

/* let textArea = document.getElementById('text-area')
let okButton = document.getElementById('ok-button')

textArea.style.display = 'none'

okButton.addEventListener('click', function() {
    //textArea.innerText = 'Button clicked!'
    textArea.style.display = 'block'
})
 */
